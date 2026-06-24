import Image from "next/image";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudyListItem from "@/components/CaseStudyListItem";
import ExperienceListItem from "@/components/ExperienceListItem";
import PatternDivider from "@/components/PatternDivider";
import SectionHeading from "@/components/SectionHeading";
import { getAllCaseStudies } from "@/lib/api/caseStudies";
import { getAllTestimonials } from "@/lib/api/testimonials";
import { getAllExperiences } from "@/lib/api/experiences";

export default async function Home() {
  const [caseStudies, testimonials, experiences] = await Promise.all([
    getAllCaseStudies(),
    getAllTestimonials(),
    getAllExperiences(),
  ]);

  return (
    <div className="bg-pattern-dots">
      <main className="screen-max-width-wrapper flex flex-col min-h-screen w-full border-x bg-bg-primary">
        <section className="md:h-[70vh] p-tile flex flex-col gap-2 justify-center">
          <p className="all-caps text-fg-tertiary">Hi, I'm Lyla</p>
          <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl max-w-4xl text-fg-primary">
            I build design systems so product teams spend less time on decisions and more time shipping.
          </h1>
          <div className="flex gap-2 items-center pt-4 text-fg-tertiary">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            Available for new projects
          </div>
        </section>
        <PatternDivider />
        <section className="flex flex-col">
          <SectionHeading text="Experience" />
          <div className="flex flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-col lg:col-span-3 lg:border-r">
              {experiences.map((experience, i) => (
                <ExperienceListItem {...experience} key={i} />
              ))}
            </div>
            <div className="bg-pattern-dots min-w-36 p-tile border-t lg:border-t-0">
              <p>Download CV placeholder</p>
            </div>
          </div>
        </section>
        <PatternDivider />
        <section id="case-studies" className="flex flex-col">
          <SectionHeading text="Case Studies" />
          <div className="grid  md:grid-cols-2 [&>*:nth-child(odd)]:border-r [&>*:nth-child(-n+2)]:border-b">
            {caseStudies.map(({ id, title, shortSummary, slug, previewMedia }) => (
              <CaseStudyListItem
                key={id}
                title={title}
                shortSummary={shortSummary}
                slug={slug}
                previewMedia={previewMedia}
              />
            ))}
          </div>
        </section>
        <PatternDivider />
        <TestimonialsSection testimonials={testimonials} />
      </main>
    </div>
  );
}
