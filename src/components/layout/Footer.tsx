import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-widest text-foreground mb-3">
              REMYNX
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              A Time Awareness System for ambitious people who refuse to let
              their days disappear unnoticed.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms and Conditions", href: "/terms" },
                { label: "Contact", href: "/contact" },
                { label: "Features", href: "/#features" },
                { label: "Screenshots", href: "/#screenshots" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-semibold">
              Get in Touch
            </p>
            <a
              href="mailto:hengsamkok76@gmail.com"
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              hengsamkok76@gmail.com
            </a>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-3 font-semibold">
                Follow
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {["Twitter / X", "Instagram", "LinkedIn"].map((social) => (
                  <span
                    key={social}
                    className="text-xs text-muted cursor-not-allowed"
                    title={`${social} — coming soon`}
                  >
                    {social === "Twitter / X"
                      ? "𝕏"
                      : social === "Instagram"
                        ? "IG"
                        : "in"}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {year} REMYNX. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built for those who take their days seriously.
          </p>
        </div>
      </div>
    </footer>
  );
}
