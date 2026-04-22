import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About OK Manager | OK Manager CRM",
  description:
    "Learn about OK Manager, the company behind OK Manager CRM for service businesses and field teams.",
};

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/#workflow", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

const principles = [
  {
    title: "Built Around Daily Operations",
    copy:
      "OK Manager CRM focuses on the records, reminders, ledgers, and follow-ups that service teams handle every day.",
  },
  {
    title: "Simple Enough for Field Teams",
    copy:
      "The product keeps workflows direct, mobile-first, and practical for teams that need quick customer actions.",
  },
  {
    title: "Clear Business Visibility",
    copy:
      "Owners can see what is due, what is collected, and where customers, leads, and suppliers stand.",
  },
  {
    title: "Support for Growing Teams",
    copy:
      "The platform is designed for businesses moving from scattered records to a structured operating system.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <div className="background-orbs" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
      </div>

      <header className="topbar container">
        <Link href="/" className="brand-mark" aria-label="OK Manager home">
          <Image
            src="/ok-manager-logo.png"
            alt="OK Manager"
            width={170}
            height={136}
            className="brand-logo"
            priority
          />
          <span className="brand-text">OK Manager</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              className={`nav-link${item.href === "/about" ? " is-active" : ""}`}
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
          <p className="eyebrow">About OK Manager</p>
          <h1>We build practical software for service businesses.</h1>
          <p>
            OK Manager is the company behind OK Manager CRM, a mobile-first
            customer and operations platform for teams that manage services,
            payments, leads, suppliers, and follow-ups.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/features">
              View Product
            </Link>
            <Link className="button button-ghost" href="/#contact">
              Contact Us
            </Link>
          </div>
        </section>

        <section className="section-head features-head">
          <p className="eyebrow">Our Focus</p>
          <h2>Helping teams replace scattered work with one reliable workflow.</h2>
          <p className="section-copy">
            OK Manager CRM brings customer records, service schedules, ledgers,
            EMI tracking, leads, and supplier activity into a single app so
            business owners and field teams can work from the same source of
            truth.
          </p>
        </section>

        <section className="detail-grid" aria-label="Company principles">
          {principles.map((item, index) => (
            <article
              className="detail-card reveal-item"
              key={item.title}
              style={{ animationDelay: `${0.06 * index}s` }}
            >
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-row">
          <p>© {new Date().getFullYear()} OK Manager. Built for field teams.</p>
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
