import { Briefcase } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border/60 bg-secondary/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Experience</h2>
          <p className="mb-10 max-w-xl text-muted-foreground">
            Roles across accounting operations and audit compliance -- the
            foundation I&apos;m now building on with financial analysis.
          </p>
        </FadeIn>

        <Stagger className="relative flex flex-col gap-8 border-l border-border/60 pl-8">
          {experience.map((entry) => (
            <StaggerItem key={entry.company} className="relative">
              <span className="absolute top-1 -left-[calc(2rem+5px)] flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Briefcase className="size-3.5" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold">
                  {entry.role} · {entry.company}
                </h3>
                <div className="flex items-center gap-2">
                  {entry.isInternship && (
                    <Badge variant="secondary" className="text-[11px]">
                      Internship
                    </Badge>
                  )}
                  <span className="text-sm text-muted-foreground">{entry.period}</span>
                </div>
              </div>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
