import Link from "next/link";
import { projects } from "../../app/data";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-8 py-10">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <Link key={i} href="/">
            <div className="flex flex-col gap-4">
              <div className="bg-neutral-100 h-[400px] w-full rounded-lg"></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-neutral-600 max-w-[70%] leading-snug">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
