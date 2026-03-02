import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  // Server-side validation
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "REMYNX Contact <noreply@remynx.app>",
      to: "support@remynx.app",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #EBEBEB; background: #141414; padding: 32px; border-radius: 12px;">
          <h2 style="color: #D97706; margin-bottom: 24px; font-size: 20px;">New Contact Message — REMYNX</h2>
          <p style="margin-bottom: 8px;"><strong style="color: #EBEBEB;">Name:</strong> <span style="color: #9CA3AF;">${escapeHtml(name)}</span></p>
          <p style="margin-bottom: 24px;"><strong style="color: #EBEBEB;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #D97706;">${escapeHtml(email)}</a></p>
          <p style="margin-bottom: 8px;"><strong style="color: #EBEBEB;">Message:</strong></p>
          <p style="color: #9CA3AF; white-space: pre-wrap; background: #1C1C1C; padding: 16px; border-radius: 8px; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
