import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "REMYNX Privacy Policy — how we collect, use, and protect your personal information. We do not sell your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: "REMYNX collects minimal information to provide its core functionality.",
    bullets: [
      "Account information: email address and display name when you register.",
      "Usage data: daily achievement logs, rest day selections, and streak information you choose to record.",
      "Device information: device type, operating system version, and app version for debugging purposes.",
      "Analytics: anonymised usage patterns to improve the App (see Analytics Usage below).",
    ],
  },
  {
    title: "2. How We Use Information",
    content: null,
    bullets: [
      "To provide and maintain the REMYNX app and its features.",
      "To send you reminder notifications (only if you have enabled them).",
      "To improve the app based on anonymised usage patterns.",
      "To communicate important updates, security notices, or changes to this policy.",
    ],
  },
  {
    title: "3. Data Storage and Security",
    content: `Your data is stored securely using industry-standard encryption. We implement technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, or disclosure. No system is 100% secure, and we cannot guarantee absolute security, but we take data protection seriously.`,
  },
  {
    title: "4. We Do Not Sell Your Data",
    content: `REMYNX does not sell, rent, trade, or monetise your personal data to any third party. Full stop. Your achievement logs and personal records are yours. We will never use them for advertising purposes or share them with data brokers.`,
    highlight: true,
  },
  {
    title: "5. Third-Party Services",
    content: "We may use the following third-party services that have their own privacy policies:",
    bullets: [
      "Firebase (Google) — for authentication, database storage, and hosting.",
      "Apple App Store / Google Play — for app distribution.",
      "Analytics providers — for anonymised, aggregated usage insights only.",
    ],
  },
  {
    title: "6. Push Notifications",
    content: `REMYNX may send push notifications for end-of-day reminders and achievement prompts. You can disable these at any time in your device's notification settings or within the App. We do not send marketing push notifications without your explicit opt-in.`,
  },
  {
    title: "7. Analytics Usage",
    content: `We use anonymised analytics to understand how users interact with REMYNX — such as which features are most used and where users encounter difficulty. This data cannot be linked back to your individual identity. We do not use behavioural advertising or cross-site tracking.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain your personal data for as long as your account is active. If you delete your account, your personal data will be deleted within 30 days, except where retention is required by law.`,
  },
  {
    title: "9. Your Rights",
    content: "Depending on your location, you may have the following rights regarding your personal data:",
    bullets: [
      "Right to access: request a copy of the data we hold about you.",
      "Right to rectification: request correction of inaccurate data.",
      "Right to erasure: request deletion of your data (see Data Deletion Requests).",
      "Right to restriction: request that we limit how we use your data.",
      "Right to portability: request your data in a machine-readable format.",
      "Right to object: object to processing of your personal data.",
    ],
  },
  {
    title: "10. Data Deletion Requests",
    content: `You can delete your REMYNX account and associated data at any time from within the App settings. If you need assistance with data deletion, contact us and we will process your request within 30 days.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via the App or email. Continued use of the App after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "12. Contact Information",
    content: "If you have questions, concerns, or requests regarding your data or this Privacy Policy, please contact us at:",
    contact: "hengsamkok76@gmail.com",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`border-t pt-8 ${
                section.highlight
                  ? "border-accent/40 bg-accent/5 rounded-2xl p-6 -mx-6"
                  : "border-border"
              }`}
            >
              <h2
                className={`text-lg font-bold mb-4 ${
                  section.highlight ? "text-accent" : "text-foreground"
                }`}
              >
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
                    <li
                      key={i}
                      className="text-muted text-sm leading-relaxed flex gap-3"
                    >
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
