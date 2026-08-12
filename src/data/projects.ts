import type { Project } from "@/types/project";

// Real research projects from the resume. pdfPath/githubUrl are placeholders --
// swap in the actual PDF (under /public/projects) and repo URL when ready.
export const projects: Project[] = [
  {
    id: "1",
    slug: "fraud-detection-benfords-law",
    title: "Fraud Detection with Benford's Law",
    shortDescription:
      "Applied coding and analytics to detect anomalies in financial data using Benford's Law.",
    longDescription:
      "Used Benford's Law to test the distribution of leading digits in financial datasets, flagging entries that deviate from the expected pattern as candidates for further audit review. Combined statistical testing with coding-based analytics to automate anomaly detection across large transaction sets.",
    tags: ["Fraud Detection", "Analytics", "Financial Data", "Research"],
    pdfPath: "/projects/sample-dcf-model.pdf",
    githubUrl: "https://github.com/your-username/fraud-detection-benfords-law",
    thumbnail: "/images/projects/project-1-thumb.svg",
    dateCompleted: "2023",
    featured: true,
  },
  {
    id: "2",
    slug: "accounting-and-popular-culture",
    title: "Accounting & Popular Culture (Food & Beverages)",
    shortDescription:
      "Researched how accountability and reporting shape branding and transparency in the F&B sector.",
    longDescription:
      "Academic research study examining how accounting practices, accountability, and financial reporting influence brand perception and transparency in the food and beverage industry, drawing on real-world corporate reporting examples.",
    tags: ["Accounting", "Research", "Branding", "Transparency"],
    pdfPath: "/projects/sample-equity-research.pdf",
    githubUrl: "https://github.com/your-username/accounting-and-popular-culture",
    thumbnail: "/images/projects/project-2-thumb.svg",
    dateCompleted: "2023",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
