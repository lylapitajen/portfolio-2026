import Image from "next/image";
import { experiences, projects } from "./data";
import TestimonialsCarouselSection from "@/components/TestimonialsCarouselSection";
import CaseStudyListItem from "@/components/CaseStudyListItem";
import ExperienceListItem from "@/components/ExperienceListItem";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 min-h-screen w-full">
      <section className="h-[60vh]">
        <div className="h-full flex flex-col max-w-4xl pt-20">
          <p className="text-content-hint">Hi, I'm Lyla!</p>
          <h1 className="text-5xl max-[400px]:text-[3rem] sm:text-6xl md:text-7xl  font-medium text-content-default">
            Product Designer & UX Engineer working with SaaS companies to design
            better digital experiences.
          </h1>
          <div className="flex gap-2 items-center pt-4 text-content-hint">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            Available for new projects
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-sm uppercase tracking-wide text-content-hint pb-2 border-b">
          Experience
        </h2>
        <div className="flex flex-col gap-8 max-w-4xl ml-auto">
          {experiences.map((experience, i) => (
            <ExperienceListItem {...experience} key={i} />
          ))}
        </div>
      </section>
      <section id="case-studies" className="flex flex-col gap-8 py-10">
        <h2 className="text-sm uppercase tracking-wide text-content-hint pb-2 border-b">
          Case Studies
        </h2>
        <div className="grid min-[992px]:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <CaseStudyListItem {...project} key={i} />
          ))}
        </div>
      </section>
      <TestimonialsCarouselSection />
    </main>
  );
}
