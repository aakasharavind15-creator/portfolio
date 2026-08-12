import {
  BookOpenCheck,
  ShieldCheck,
  FileBarChart,
  Receipt,
  SearchCode,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { capabilities, tools, languages } from "@/data/profile";

const capabilityIcons = [BookOpenCheck, ShieldCheck, FileBarChart, Receipt, SearchCode, Users];

export function Skills() {
  return (
    <section id="skills" className="border-y border-border/60 bg-secondary/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Skills</h2>
          <p className="mb-10 max-w-xl text-muted-foreground">
            What I bring to accounting, audit, and analysis work -- and the
            tools and languages I use to get there.
          </p>
        </FadeIn>

        <Stagger className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
          {capabilities.map((capability, i) => {
            const Icon = capabilityIcons[i];
            return (
              <StaggerItem key={capability.title}>
                <Card className="h-full gap-3 p-5">
                  <CardContent className="flex flex-col gap-2 p-0">
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-4.5" />
                    </div>
                    <p className="font-semibold">{capability.title}</p>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <FadeIn>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Tools
            </h3>
            <div className="flex flex-col gap-4">
              {tools.map((tool) => (
                <div key={tool.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < tool.level ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Languages
            </h3>
            <div className="flex flex-col gap-4">
              {languages.map((language) => (
                <div key={language.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${language.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
