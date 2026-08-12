import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { QuickFacts } from "@/components/sections/quick-facts";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuickFacts />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
