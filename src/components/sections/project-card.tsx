"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerItem } from "@/components/motion/fade-in";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: "easeOut" }}>
        <Link href={`/projects/${project.slug}`} className="group block h-full">
          <Card className="h-full overflow-hidden py-0 transition-colors group-hover:border-primary/50">
            {project.thumbnail && (
              <div className="relative aspect-[5/3] w-full overflow-hidden bg-muted">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <CardContent className="flex flex-col gap-3 py-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold tracking-tight">{project.title}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[11px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    </StaggerItem>
  );
}
