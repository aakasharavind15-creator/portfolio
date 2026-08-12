import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/60 bg-secondary/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight">Let&apos;s connect</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Open to Financial Analyst, FP&amp;A, and Audit/Compliance roles -- feel free to reach out on any of these.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {socials.map((social) => (
            <Tooltip key={social.label}>
              <TooltipTrigger asChild>
                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  {social.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>{social.tooltip ?? social.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aakash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
