import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    title: "Service + Customer CRM",
    copy:
      "Manage customers, service schedules, due dates, and map locations in one dashboard.",
  },
  {
    title: "Payment Ledger + EMI",
    copy:
      "Track given/received entries, outstanding balances, EMI collections, and reminders.",
  },
  {
    title: "Lead Pipeline",
    copy:
      "Capture, follow up, and convert leads to customers with structured status workflows.",
  },
  {
    title: "Supplier Management",
    copy:
      "Maintain supplier profiles and ledgers to monitor payables and advance balances.",
  },
  {
    title: "OTP Login + Owner Onboarding",
    copy:
      "Phone OTP sign-in and profile setup keeps onboarding fast for field teams.",
  },
  {
    title: "Bilingual + Mobile-first",
    copy:
      "Built for real operations with English/Hindi support and quick WhatsApp/call actions.",
  },
];

const operationsHighlights = [
  { label: "Core workflows", value: "Customers, Payments, Leads" },
  { label: "Field-ready actions", value: "Call, WhatsApp, reminders" },
  { label: "Operational visibility", value: "Ledger, EMI, service schedule" },
];

const workflowSteps = [
  {
    title: "Add your team and records",
    copy:
      "Set up owner profile, add customers/suppliers, and bring your live business data into the app.",
  },
  {
    title: "Run daily operations",
    copy:
      "Use Services, Payments, and Leads tabs to handle follow-ups, collections, and sales activity.",
  },
  {
    title: "Scale with clarity",
    copy:
      "Track what is due, what is collected, and where each lead or account stands.",
  },
];

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/#workflow", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Home() {
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
          <span className="brand-text">OK MANAGER CRM</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link className="nav-link" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-solid button-small" href="/#contact">
          Book Demo
        </Link>
      </header>

      <main id="home">
        <section className="hero container">
          <div className="hero-grid">
            <div className="hero-copy-block">
              <p className="eyebrow">OK Manager CRM</p>
              <h1>Professional CRM for service teams that run on follow-ups.</h1>
              <p className="hero-copy">
                Manage customers, services, payments, suppliers, and leads in
                one reliable mobile workflow designed for day-to-day
                operations.
              </p>
              <div className="hero-actions">
                <Link className="button button-solid" href="/features">
                  Explore Features
                </Link>
                <Link className="button button-ghost" href="/#pricing">
                  View Pricing
                </Link>
              </div>
            </div>

            <aside className="hero-panel reveal-item" aria-label="Operational snapshot">
              <p className="panel-title">Operational snapshot</p>
              <ul className="panel-list">
                {operationsHighlights.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <ul className="stat-strip" aria-label="Platform highlights">
            <li>
              <strong>6+</strong>
              <span>Core modules</span>
            </li>
            <li>
              <strong>2</strong>
              <span>Language support</span>
            </li>
            <li>
              <strong>1</strong>
              <span>Unified workflow</span>
            </li>
          </ul>
        </section>

        <section className="section container" id="features">
          <div className="section-head">
            <p className="eyebrow">Core Modules</p>
            <h2>Everything needed for customer-led service operations.</h2>
            <p className="section-copy">
              The feature set maps directly to live workflows already used in
              the OK Manager app.
            </p>
          </div>
          <div className="feature-grid">
            {featureCards.map((item, index) => (
              <article
                className="feature-card reveal-item"
                key={item.title}
                style={{ animationDelay: `${0.08 * index}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="workflow">
          <div className="section-head">
            <p className="eyebrow">How It Works</p>
            <h2>Run the same disciplined process every day.</h2>
          </div>
          <ol className="workflow-list">
            {workflowSteps.map((step, index) => (
              <li key={step.title} className="workflow-item reveal-item">
                <span className="step-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section container" id="pricing">
          <div className="pricing-layout reveal-item">
            <div className="pricing-card">
              <p className="eyebrow">Pricing</p>
              <h2>Simple subscription. Built for small and growing teams.</h2>
              <p>
                One operational system for records, collections, reminders, and
                conversions. Subscription checkout is handled in-app.
              </p>
              <Link className="button button-solid" href="/#contact">
                Talk to Sales
              </Link>
            </div>
            <div className="pricing-includes">
              <h3>Included in the platform</h3>
              <ul>
                <li>Customer, supplier, and lead lifecycle management</li>
                <li>Ledger and EMI tracking with due-date flow</li>
                <li>Service schedule planning and map-based operations</li>
                <li>Bilingual support and quick WhatsApp/call actions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section container" id="contact">
          <div className="contact-panel reveal-item">
            <p className="eyebrow">Contact</p>
            <h2>Need this setup for your team?</h2>
            <p>
              We can help you onboard and align the workflow to your operating
              model.
            </p>
            <div className="contact-actions">
              <a className="button button-solid" href="tel:+919536500003">
                Call Us
              </a>
              <a
                className="button button-ghost"
                href="https://wa.me/919536500003"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} OK Manager CRM. Built for field teams.</p>
      </footer>
    </div>
  );
}
