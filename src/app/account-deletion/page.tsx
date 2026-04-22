import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Account Deletion | OK Manager",
  description: "How to request account deletion for OK Manager CRM.",
};

export default function AccountDeletionPage() {
  return (
    <LegalShell
      eyebrow="Support"
      title="Account Deletion"
      lastUpdated="February 21, 2026"
    >
      <section className="legal-section">
        <h2>Delete account from app</h2>
        <p>
          In the OK Manager CRM app, open <strong>Profile</strong> and tap{" "}
          <strong>Delete account</strong>. Confirm the prompt to submit deletion.
        </p>
      </section>

      <section className="legal-section">
        <h2>Delete account without app access</h2>
        <p>
          Contact support on WhatsApp or phone at{" "}
          <a href="tel:+919536500003">+91 95365 00003</a> using your registered
          mobile number.
        </p>
      </section>

      <section className="legal-section">
        <h2>What gets deleted</h2>
        <ul>
          <li>Account profile and linked CRM records under your account.</li>
          <li>Customer, payment, lead, supplier, and service data linked to you.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>What may be retained</h2>
        <p>
          Minimal records may be retained for legal compliance, fraud
          prevention, dispute handling, and financial audit requirements.
        </p>
      </section>

      <section className="legal-section">
        <h2>Deletion timeline</h2>
        <p>
          Requests are usually processed within 7 business days unless legal
          retention is required.
        </p>
      </section>
    </LegalShell>
  );
}
