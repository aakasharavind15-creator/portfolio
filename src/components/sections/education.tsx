import { GraduationCap, Award, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { education, certifications } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <FadeIn>
        <h2 className="mb-10 text-3xl font-bold tracking-tight">Education & Certifications</h2>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Education
          </h3>
          <Stagger className="flex flex-col gap-4">
            {education.map((entry) => (
              <StaggerItem key={entry.institution}>
                <Card className="flex-row items-start gap-3 p-4">
                  <CardContent className="flex items-start gap-3 p-0">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="size-4.5" />
                    </div>
                    <div>
                      <p className="font-semibold">{entry.institution}</p>
                      <p className="text-sm text-muted-foreground">{entry.credential}</p>
                      <p className="text-xs text-muted-foreground">{entry.period}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Certifications
          </h3>
          <Stagger className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <Card className="flex-row items-start gap-3 p-4">
                  <CardContent className="flex w-full items-start gap-3 p-0">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="size-4.5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold">{cert.name}</p>
                        <Badge
                          variant={cert.status === "Completed" ? "accent" : "outline"}
                          className="shrink-0 gap-1 text-[11px]"
                        >
                          {cert.status === "Pursuing" && <Clock className="size-3" />}
                          {cert.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
