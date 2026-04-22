import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../company";

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/#workflow", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

const featureDetails = [
  {
    title: "Customer + Service Management",
    bullets: [
      "Customer profiles with contact and address details",
      "Service schedule tracking with status lifecycle",
      "Map-based customer visibility for field operations",
    ],
  },
  {
    title: "Payments, Ledger, and EMI Tracking",
    bullets: [
      "Given/received entries with running balance",
      "EMI setup with due-date handling",
      "Attachment-enabled records for proofs and notes",
    ],
  },
  {
    title: "Lead Pipeline",
    bullets: [
      "Lead creation and status progression",
      "Activity timeline and follow-up reminders",
      "One-step lead conversion to customer records",
    ],
  },
  {
    title: "Supplier Operations",
    bullets: [
      "Supplier profile management",
      "Supplier ledger for payable/advance balance tracking",
      "Daily payables visibility for purchasing workflows",
    ],
  },
  {
    title: "Authentication + Onboarding",
    bullets: [
      "OTP-based login flow",
      "Owner profile setup on first login",
      "Session-based access to app modules",
    ],
  },
  {
    title: "Language + Communication",
    bullets: [
      "English and Hindi language support",
      "Direct call/WhatsApp quick actions",
      "Permission-driven notifications and reminders",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="site-shell">
      <div className="background-orbs" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
      </div>

      <header className="topbar container">
        <Link href="/" className="brand-mark" aria-label={`${companyInfo.brandName} home`}>
          <Image
            src="/ok-manager-logo.png"
            alt={companyInfo.brandName}
            width={170}
            height={136}
            className="brand-logo"
            priority
          />
          <span className="brand-text">{companyInfo.brandName}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              className={`nav-link${item.href === "/features" ? " is-active" : ""}`}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-solid button-small" href="/#contact">
          Book Demo
        </Link>
      </header>

      <main className="container inner-main">
        <section className="inner-hero reveal-item">
          <p className="eyebrow">Dedicated Feature Page</p>
          <h1>Detailed capability view for your sales and onboarding flow.</h1>
          <p>
            Use this page when prospects want module-level clarity before
            rollout.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/#contact">
              Request Demo
            </Link>
            <Link className="button button-ghost" href="/">
              Back to Home
            </Link>
          </div>
        </section>

        <section className="section-head features-head">
          <h2>Complete module breakdown</h2>
          <p className="section-copy">
            Structured by real daily workflows your team performs in the app.
          </p>
        </section>

        <section className="detail-grid" aria-label="Feature breakdown">
          {featureDetails.map((item, index) => (
            <article
              className="detail-card reveal-item"
              key={item.title}
              style={{ animationDelay: `${0.06 * index}s` }}
            >
              <h2>{item.title}</h2>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-row">
          <p>© {new Date().getFullYear()} {companyInfo.name}. Built for field teams.</p>
          <nav className="footer-links" aria-label="Legal">
            <Link href="/about">About</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/account-deletion">Account deletion</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
