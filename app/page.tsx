import Image from "next/image";
import { experiences, projects } from "./data";
import ProjectsSection from "@/components/ui/ProjectsSection";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import FinalCTABlock from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 min-h-screen w-full">
      <section className="h-[60vh]">
        <div className="h-full flex flex-col gap-1 max-w-4xl pt-20">
          <p className="text-neutral-500 text-xl">Hi, I'm Lyla</p>
          <h1 className="text-7xl font-medium text-neutral-default">
            Product Designer & UX Engineer working with SaaS companies to design
            better digital experiences.
          </h1>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="flex flex-col gap-8 max-w-4xl">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-12 pb-8 border-b">
              <h3 className="text-xl font-medium w-full max-w-40">
                {exp.company}
              </h3>
              <p className="text-neutral-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      <ProjectsSection />
      <section className="flex flex-col gap-8 py-10">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <TestimonialsCarousel />
      </section>
    </main>
  );
}
