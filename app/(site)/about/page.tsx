import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="screen-max-width-wrapper flex flex-col gap-20 min-h-screen w-full">
      <section className="flex flex-col gap-10 min-[996px]:flex-row lg:gap-12 xl:gap-20 h-full justify-center pt-20">
        <div className="flex-1 flex flex-col">
          <p className="text-sm uppercase tracking-wide text-content-hint">About me</p>
          <h1 className="text-2xl md:text-3xl font-medium text-content-default">
            I'm a Product Designer who loves to code! I have experience leading end-to-end design projects and building
            design systems for B2B and SaaS startups and scale-ups. When I'm not working, I'm probably{" "}
            <span className="line-through text-neutral-300">annoying</span> hanging out with my cats or working on a
            personal project. I share my thoughts, design process and recent projects on{" "}
            <span className="underline bg-sky-100 text-sky-700 px-1">
              <Link
                href="https://www.linkedin.com/in/lyla-pitajen-00b25a266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </span>
            {", "}so let's connect there!
          </h1>
        </div>
        <div className="flex-1">
          <Image
            src="/about-images/me-cyprus.JPG"
            alt="Image of Lyla holding a Keo beer with a pictureque of the sea in the background"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
