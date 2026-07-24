import type { Project } from "@/types/project";

// Placeholder project data. Replace the values below with your real
// projects: update pdfPath to point at your real PDF in /public/projects,
// and githubUrl to the repo containing your Excel workings + final PDF.
export const projects: Project[] = [
  {
    id: "1",
    slug: "dcf-valuation-model",
    title: "DCF Valuation Model",
    shortDescription:
      "A discounted cash flow model estimating intrinsic value for a listed company, with sensitivity analysis on WACC and terminal growth.",
    longDescription:
      "Built a full discounted cash flow model from historical financials, including revenue build-up, working capital schedule, WACC calculation, and terminal value sensitivity tables. The final report summarizes assumptions, valuation output, and key risks.",
    tags: ["DCF", "Valuation", "Excel", "Financial Modeling"],
    pdfPath: "/projects/sample-dcf-model.pdf",
    githubUrl: "https://github.com/your-username/dcf-valuation-model",
    thumbnail: "/images/projects/project-1-thumb.svg",
    dateCompleted: "2026-02",
    featured: true,
  },
  {
    id: "2",
    slug: "equity-research-note",
    title: "Equity Research Note",
    shortDescription:
      "An initiating-coverage style equity research note covering business overview, industry landscape, and valuation using comparable companies.",
    longDescription:
      "Prepared an equity research note including company overview, competitive positioning, financial summary, and a comparable companies (comps) valuation analysis. Includes an investment thesis and key risks to the recommendation.",
    tags: ["Equity Research", "Comps", "Valuation", "Excel"],
    pdfPath: "/projects/sample-equity-research.pdf",
    githubUrl: "https://github.com/your-username/equity-research-note",
    thumbnail: "/images/projects/project-2-thumb.svg",
    dateCompleted: "2026-04",
    featured: true,
  },
  {
    id: "3",
    slug: "budget-variance-dashboard",
    title: "Budget Variance Dashboard",
    shortDescription:
      "A monthly budget-vs-actual variance analysis with driver-level commentary, built in Excel with pivot tables and charts.",
    longDescription:
      "Analyzed monthly budget vs. actual performance across departments, isolating price, volume, and mix drivers behind material variances. Delivered a one-page dashboard with waterfall charts and written variance commentary.",
    tags: ["Variance Analysis", "FP&A", "Excel", "Dashboards"],
    pdfPath: "/projects/sample-budget-variance.pdf",
    githubUrl: "https://github.com/your-username/budget-variance-dashboard",
    thumbnail: "/images/projects/project-3-thumb.svg",
    dateCompleted: "2026-06",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
