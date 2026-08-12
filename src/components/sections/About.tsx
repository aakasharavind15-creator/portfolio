import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <FadeIn className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[auto_1fr]">
        <div className="flex justify-center sm:justify-start">
          <Avatar className="size-40 border-4 border-primary/60 shadow-lg">
            <AvatarImage src="/images/profile-placeholder.svg" alt="Aakash" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">About Me</h2>
          <div className="flex flex-col gap-3 text-muted-foreground">
            <p>
              I&apos;m an Accounting &amp; Finance graduate (MSc, University of
              Exeter; B.Com, University of Madras) with hands-on experience in
              audit compliance, MIS reporting, and accounting operations across
              a bank and a healthcare business. I&apos;m skilled in Tally ERP and
              MS Excel (VLOOKUP, Pivot Tables, MIS), with strong communication
              and stakeholder management abilities built from coordinating
              across Relationship Managers to Regional Heads.
            </p>
            <p>
              My postgraduate studies gave me global exposure through UK
              coursework, and I&apos;ve balanced that academic load alongside
              full-time work -- including a research project applying
              Benford&apos;s Law to detect anomalies in financial data. I&apos;m
              now building on my accounting and audit foundation with the
              PGFAP certification and am actively pursuing ACCA.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline">PGFAP Certified</Badge>
            <Badge variant="outline">Pursuing ACCA</Badge>
            <Badge variant="outline">UK Postgraduate Studies</Badge>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
