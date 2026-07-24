import { FadeIn, Stagger } from "@/components/motion/fade-in";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <FadeIn>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Projects</h2>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stagger>
    </section>
  );
}
