import { companyInfo } from "../company";

type CompanyContactProps = {
  className?: string;
};

export function CompanyContact({ className }: CompanyContactProps) {
  return (
    <address className={`contact-details${className ? ` ${className}` : ""}`}>
      <strong>{companyInfo.name}</strong>
      <span>{companyInfo.address}</span>
      <span>
        Support:{" "}
        {companyInfo.supportNumbers.map((number, index) => (
          <span key={number.href}>
            <a href={number.href}>{number.label}</a>
            {index < companyInfo.supportNumbers.length - 1 ? ", " : ""}
          </span>
        ))}
      </span>
      <span>
        Email: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
      </span>
      <span>
        Website:{" "}
        <a href={companyInfo.websiteUrl} target="_blank" rel="noreferrer">
          {companyInfo.website}
        </a>
      </span>
    </address>
  );
}
