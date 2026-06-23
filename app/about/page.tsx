import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-pattern-dots">
      <main className="screen-max-width-wrapper min-h-screen w-full bg-bg-primary border-x">
        <section className="grid grid-cols-2 min-h-screen justify-center">
          <div className="flex flex-col p-tile pt-20 border-r h-full">
            <p className="text-sm uppercase tracking-wide text-fg-tertiary">About me</p>
            <h1 className="font-sans text-2xl md:text-3xl font-medium text-fg-primary leading-[1.3]">
              I'm a Product Designer who loves to code! I have experience leading end-to-end design projects and
              building design systems for B2B and SaaS startups and scale-ups. When I'm not working, I'm probably{" "}
              <span className="line-through text-neutral-300">annoying</span> hanging out with my cats or working on a
              personal project. I share my thoughts, design process and recent projects on{" "}
              <span>
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
          <div className="grid">
            <div className="p-tile pt-20 border-b">
              <Image
                src="/about-images/me-cyprus.JPG"
                alt="Image of Lyla holding a Keo beer with a pictureque of the sea in the background"
                width={800}
                height={800}
                className="h-full w-full object-cover max-h-[500px] aspect-video"
              />
            </div>

            <div className="bg-pattern-diagonal h-full w-full"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
