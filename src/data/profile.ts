export const profile = {
  name: "Aakash Aravind Kumar",
  title: "Accounting & Finance Graduate",
  location: "Arumbakkam, Chennai, India",
  email: "aakasharavind.1599@gmail.com",
  phone: "+91 7358437064",
  resumeUrl: "/resume.pdf",
};

export const quickFacts = [
  { label: "Location", value: "Chennai, India" },
  { label: "Education", value: "MSc, Univ. of Exeter" },
  { label: "Certification", value: "PGFAP, Imarticus" },
  { label: "Experience", value: "1+ Year" },
  { label: "Languages", value: "4 Spoken" },
  { label: "Availability", value: "Open to work" },
];

export const stats = [
  { value: "0", label: "Audit pendency achieved at HDFC branches" },
  { value: "1+", label: "Year of finance & audit experience" },
  { value: "2", label: "Independent research & analytics projects" },
  { value: "4", label: "Languages spoken across regions" },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  isInternship?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Jeevan Mithra Fertility & Women Care Centre",
    role: "Accounts Assistant",
    period: "Jan 2022 -- Aug 2022",
    bullets: [
      "Maintained accounts in Tally ERP and digitalized transaction records.",
      "Prepared audit-ready reports, assisted in tax audit filings, and supported GST compliance.",
      "Produced reconciliations and documentation for compliance.",
    ],
  },
  {
    company: "HDFC Bank",
    role: "Audit Compliance Officer",
    period: "Mar 2021 -- Aug 2021",
    bullets: [
      "Ensured zero audit pendency across branches by resolving compliance issues.",
      "Produced MIS reports with Excel and Word to support management decisions.",
      "Coordinated with stakeholders from Relationship Managers to Regional Heads.",
    ],
  },
  {
    company: "Chennai Central Cooperative Society Bank (CC Bank)",
    role: "Intern",
    period: "2019",
    bullets: ["Studied organizational structure and cooperative banking processes."],
    isInternship: true,
  },
];

export interface EducationEntry {
  institution: string;
  credential: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    institution: "University of Exeter",
    credential: "MSc in Accounting & Finance",
    period: "Sep 2022 -- 2023",
  },
  {
    institution: "University of Madras",
    credential: "B.Com in Corporate Secretaryship",
    period: "Jun 2017 -- Apr 2020",
  },
  {
    institution: "ICSI",
    credential: "Foundation Programme",
    period: "2017",
  },
];

export interface CertificationEntry {
  name: string;
  issuer: string;
  status: "Completed" | "Pursuing";
}

export const certifications: CertificationEntry[] = [
  {
    name: "PGFAP -- Post Graduate Financial Analysis Program",
    issuer: "Imarticus Learning",
    status: "Completed",
  },
  {
    name: "ACCA",
    issuer: "Association of Chartered Certified Accountants",
    status: "Pursuing",
  },
];

export const capabilities = [
  {
    title: "Accounting & Financial Reporting",
    description: "Books of accounts, reconciliations, and audit-ready reporting for statutory review.",
  },
  {
    title: "Audit & Compliance",
    description: "Resolved compliance issues across bank branches, achieving zero audit pendency.",
  },
  {
    title: "MIS Reporting",
    description: "Built management information reports in Excel to support leadership decisions.",
  },
  {
    title: "GST & Tax Filings",
    description: "Assisted in tax audit filings and supported GST compliance documentation.",
  },
  {
    title: "Fraud Detection & Analytics",
    description: "Applied Benford's Law and coding-based analytics to flag anomalies in financial data.",
  },
  {
    title: "Stakeholder Communication",
    description: "Coordinated across Relationship Managers to Regional Heads on compliance matters.",
  },
];

export interface ToolProficiency {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export const tools: ToolProficiency[] = [
  { name: "Tally ERP", level: 4 },
  { name: "MS Excel (VLOOKUP, Pivot Tables, MIS)", level: 4 },
  { name: "MS Word", level: 4 },
  { name: "PowerPoint", level: 3 },
];

export interface LanguageProficiency {
  name: string;
  level: "Native" | "Fluent" | "Intermediate" | "Basic";
  percent: number;
}

export const languages: LanguageProficiency[] = [
  { name: "Tamil", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 90 },
  { name: "Telugu", level: "Intermediate", percent: 60 },
  { name: "Hindi", level: "Basic", percent: 35 },
];
