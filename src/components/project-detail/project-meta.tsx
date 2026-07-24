import { SiGithub } from "@icons-pack/react-simple-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="max-w-2xl text-muted-foreground">
        {project.longDescription ?? project.shortDescription}
      </p>

      <Button asChild size="lg" className="w-fit">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <SiGithub size={16} color="currentColor" />
          See more on GitHub (Excel workings + PDF)
        </a>
      </Button>
    </div>
  );
}
