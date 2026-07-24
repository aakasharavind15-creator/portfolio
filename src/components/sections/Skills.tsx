import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";

const skills = [
  "Financial Modeling",
  "Excel / VBA",
  "DCF & Comps Valuation",
  "Financial Statement Analysis",
  "Variance Analysis",
  "FP&A",
  "PowerPoint Storytelling",
  "Bloomberg / Capital IQ",
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-border/60 bg-secondary/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">Skills</h2>
        </FadeIn>
        <Stagger className="flex flex-wrap gap-3" staggerDelay={0.05}>
          {skills.map((skill) => (
            <StaggerItem key={skill}>
              <Badge
                variant="accent"
                className="rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                {skill}
              </Badge>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
