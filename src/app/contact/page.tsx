"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: { name: string; email: string; message: string }) {
    const errs: Record<string, string> = {};
    if (!data.name.trim()) errs.name = "Name is required.";
    if (!data.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) errs.message = "Message is required.";
    else if (data.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors";
  const errorClass = "text-xs text-red-400 mt-1";

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted leading-relaxed">
            Have a question, feedback, or a data deletion request? We&apos;d
            love to hear from you. We reply to every message.
          </p>
          <p className="text-sm text-muted mt-4">
            Or email us directly:{" "}
            <a
              href="mailto:hengsamkok76@gmail.com"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              hengsamkok76@gmail.com
            </a>
          </p>
        </div>

        {state === "success" ? (
          <div className="bg-surface border border-accent/30 rounded-2xl p-10 text-center">
            <p className="text-3xl mb-4">◆</p>
            <h2 className="text-xl font-bold text-foreground mb-3">
              Message received.
            </h2>
            <p className="text-muted text-sm">
              Thanks for reaching out. We&apos;ll get back to you within 1–2
              business days.
            </p>
            <button
              onClick={() => setState("idle")}
              className="mt-6 text-xs text-muted hover:text-accent transition-colors uppercase tracking-widest"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-widest text-muted font-semibold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={inputClass}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p id="name-error" className={errorClass} role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-widest text-muted font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className={inputClass}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" className={errorClass} role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-widest text-muted font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message..."
                className={`${inputClass} resize-none`}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p id="message-error" className={errorClass} role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Error state */}
            {state === "error" && (
              <p className="text-sm text-red-400" role="alert">
                Something went wrong. Please try again or email us directly at
                hengsamkok76@gmail.com.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-background font-bold text-sm px-6 py-4 rounded-full transition-colors"
            >
              {state === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
