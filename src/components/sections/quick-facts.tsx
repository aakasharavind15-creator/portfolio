import { MapPin, GraduationCap, Award, Briefcase, Languages, CircleCheck } from "lucide-react";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { quickFacts } from "@/data/profile";

const icons = [MapPin, GraduationCap, Award, Briefcase, Languages, CircleCheck];

export function QuickFacts() {
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-10">
      <FadeIn className="mx-auto max-w-5xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6" staggerDelay={0.05}>
          {quickFacts.map((fact, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={fact.label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{fact.value}</p>
                  <p className="text-xs text-muted-foreground">{fact.label}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </FadeIn>
    </section>
  );
}
