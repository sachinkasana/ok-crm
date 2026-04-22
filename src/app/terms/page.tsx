import type { Metadata } from "next";
import Link from "next/link";
import { CompanyContact } from "../components/company-contact";
import { companyInfo } from "../company";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: `Terms of Service | ${companyInfo.name}`,
  description: `Terms of Service for ${companyInfo.productName}.`,
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal" title="Terms of Service" lastUpdated="February 21, 2026">
      <section className="legal-section">
        <h2>1. Acceptance</h2>
        <p>
          By using OK Manager CRM, you agree to these Terms of Service and our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Services</h2>
        <p>
          OK Manager CRM provides customer, payment, service, lead, and supplier
          management features for businesses.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Accounts and Access</h2>
        <p>
          You are responsible for account access linked to your registered
          mobile number and for activity performed through your account.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Acceptable Use</h2>
        <ul>
          <li>Use the service only for lawful business operations.</li>
          <li>Do not misuse OTP, APIs, or attempt unauthorized access.</li>
          <li>Do not upload unlawful or harmful content.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Subscription and Payments</h2>
        <p>
          Paid plans, if applicable, are billed as shown in-app. Pricing and
          features may change with prior notice where required.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Data</h2>
        <p>
          Data handling is described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Termination</h2>
        <p>
          You may stop using the service at any time. Account deletion can be
          requested in-app or via our <Link href="/account-deletion">Account Deletion</Link> page.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Contact</h2>
        <CompanyContact />
      </section>
    </LegalShell>
  );
}
