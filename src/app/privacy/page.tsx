import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | OK Manager",
  description: "Privacy Policy for OK Manager CRM.",
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy" lastUpdated="February 21, 2026">
      <section className="legal-section">
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Account information such as phone number and profile details.</li>
          <li>Business records you create (customers, payments, leads, services, suppliers).</li>
          <li>
            Optional location information when you choose location-based features.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>2. How We Use Information</h2>
        <ul>
          <li>To provide and operate CRM features.</li>
          <li>To secure account access using OTP verification.</li>
          <li>To support reminders, collections, and workflow operations.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Sharing</h2>
        <p>
          We do not sell personal data. Data may be processed by trusted
          infrastructure and communication providers required to operate the app.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Retention</h2>
        <p>
          We retain data while your account is active and as needed for legal,
          fraud-prevention, or operational obligations.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Security</h2>
        <p>
          We use reasonable safeguards to protect your data. No system is
          completely risk-free, so you should protect access to your device and account.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Your Choices</h2>
        <p>
          You can update profile/business records in-app and request account
          deletion using the in-app flow or via{" "}
          <Link href="/account-deletion">Account Deletion</Link>.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Contact</h2>
        <p>
          Phone / WhatsApp: <a href="tel:+919536500003">+91 95365 00003</a>
        </p>
      </section>
    </LegalShell>
  );
}
