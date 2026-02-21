import Image from "next/image";
import Link from "next/link";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function LegalShell({
  eyebrow,
  title,
  lastUpdated,
  children,
}: LegalShellProps) {
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
          Contact
        </Link>
      </header>

      <main className="container inner-main legal-main">
        <article className="legal-card reveal-item">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-meta">Last updated: {lastUpdated}</p>
          {children}
        </article>
      </main>

      <footer className="footer container">
        <div className="footer-row">
          <p>© {new Date().getFullYear()} OK Manager CRM. Built for field teams.</p>
          <nav className="footer-links" aria-label="Legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/account-deletion">Account deletion</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
