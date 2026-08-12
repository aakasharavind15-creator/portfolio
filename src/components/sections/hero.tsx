"use client";

import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-16"
    >
      <div className="bg-grid absolute inset-0 -z-20 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />

      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Stagger className="flex flex-col items-start gap-6">
          <StaggerItem>
            <Badge variant="accent" className="px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              Open to Financial Analyst & Audit/Compliance Roles
            </Badge>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
                Aakash
              </span>
              .
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-xl text-lg text-muted-foreground">
              {profile.title} with hands-on experience in audit compliance,
              MIS reporting, and accounting operations -- now building on
              that foundation with the PGFAP certification to move into
              financial analysis.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.resumeUrl} download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </StaggerItem>
        </Stagger>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
