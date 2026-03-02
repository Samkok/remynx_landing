import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "REMYNX Terms and Conditions — understand your rights and responsibilities when using the REMYNX Time Awareness System.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to REMYNX ("the App", "we", "our", or "us"). By downloading, installing, or using REMYNX, you agree to be bound by these Terms and Conditions. Please read them carefully before using the App.`,
  },
  {
    title: "2. Acceptance of Terms",
    content: `By accessing or using REMYNX, you confirm that you are at least 13 years of age and agree to these Terms. If you do not agree, you must not use the App.`,
  },
  {
    title: "3. User Responsibilities",
    content: null,
    bullets: [
      "You are responsible for maintaining the security of your account and device.",
      "You agree not to misuse the App, including attempting to reverse-engineer, copy, or distribute any part of it.",
      "You agree to provide accurate information when creating an account.",
      "You are solely responsible for the content you log within the App.",
    ],
  },
  {
    title: "4. Account Usage",
    content: `REMYNX is intended for personal, non-commercial use. You may not share your account with others or use the App for any unlawful purpose. We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content, design, branding, and code within REMYNX are the intellectual property of REMYNX and its creators. You are granted a limited, non-exclusive, non-transferable licence to use the App solely for personal use. No part of the App may be reproduced, distributed, or sold without written permission.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, REMYNX and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of revenue, or loss of opportunity, arising from your use of or inability to use the App.`,
  },
  {
    title: "7. No Guarantee of Productivity Outcomes",
    content: `REMYNX is a Time Awareness System designed to promote self-reflection and intentional living. We do not guarantee any specific productivity outcomes, career results, or personal achievements. Results depend entirely on the user's own actions and commitment.`,
  },
  {
    title: "8. Termination",
    content: `We reserve the right to suspend or terminate your access to REMYNX at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or the App.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which REMYNX operates, without regard to conflict of law provisions.`,
  },
  {
    title: "10. Changes to These Terms",
    content: `We may update these Terms from time to time. Continued use of the App after any changes constitutes your acceptance of the new Terms. We encourage you to review this page periodically.`,
  },
  {
    title: "11. Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us at:`,
    contact: "hengsamkok76@gmail.com",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-semibold">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms and Conditions
          </h1>
          <p className="text-muted text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-border pt-8">
              <h2 className="text-lg font-bold text-foreground mb-4">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-muted leading-relaxed text-sm mb-4">
                  {section.content}
                </p>
              )}
              {section.bullets && (
                <ul className="space-y-2 ml-4">
                  {section.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted text-sm leading-relaxed flex gap-3">
                      <span className="text-accent mt-1 shrink-0">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <a
                  href={`mailto:${section.contact}`}
                  className="text-accent hover:text-accent-hover transition-colors text-sm font-medium"
                >
                  {section.contact}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
