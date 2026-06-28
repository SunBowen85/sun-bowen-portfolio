import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { StudioBackdrop } from "@/components/StudioBackdrop";

export default function Home() {
  return (
    <>
      <StudioBackdrop />
      <CursorGlow />
      <Navbar />
      <main className="relative z-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
