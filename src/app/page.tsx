import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-black">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
