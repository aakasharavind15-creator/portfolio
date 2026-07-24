import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
          <p className="text-muted-foreground">
            I&apos;m a Financial Analyst fresher with a strong foundation in
            financial modeling, valuation, and Excel-based analysis built
            through academic coursework and self-driven projects. I enjoy
            breaking down financial statements to find the story behind the
            numbers, and I&apos;m looking for an opportunity to apply that
            rigor on a real analyst team.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
