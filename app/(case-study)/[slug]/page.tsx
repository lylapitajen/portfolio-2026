import { getOneCaseStudy, getAllCaseStudies } from "@/lib/api/caseStudies";
import Image from "next/image";
import Markdown from "react-markdown";
import Layout from "@/components/Layout";
import { strapiImageUrl } from "@/lib/utils";
import Link from "next/link";

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title, content, longSummary, client, resultsMedia } = await getOneCaseStudy(slug);

  console.log(client.agency?.logo.url);

  return (
    <Layout navTheme="dark" backgroundColor={client.brandColor}>
      <main className="flex flex-col gap-20 min-h-screen w-full">
        <section className="flex flex-col min-h-[90vh] pt-24" style={{ backgroundColor: client.brandColor }}>
          <div className="screen-max-width-wrapper">
            <div className="flex flex-col gap-2 items-start max-w-3xl">
              <Image
                src={strapiImageUrl({ url: client.logo.url })}
                alt={`${title} logo`}
                height={200}
                width={200}
                className="h-7! w-auto! mb-4"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-50 mb-2">{title}</h1>
              <p className="text-neutral-200 text-xl">{longSummary}</p>
            </div>
          </div>
        </section>
        <section className="w-full bg-background">
          <div className="screen-max-width-wrapper pt-12">
            {/* AGENCY CREDIT */}
            {client.agency && (
              <p className=" text-content-muted max-w-3xl mx-auto mb-4 md:mb-8">
                This project was completed as part of my role at
                <span className="inline-flex items-center gap-1 whitespace-nowrap ml-1 translate-y-1">
                  <Image
                    src={strapiImageUrl({ url: client.agency.logo.url })}
                    alt={`${client.agency.name} logo`}
                    width={20}
                    height={20}
                    className="ml-1 rounded-full"
                    unoptimized
                  />
                  <Link
                    href={client.agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer font-medium underline-offset-4 decoration-neutral-200"
                  >
                    {client.agency.name}
                  </Link>
                </span>
              </p>
            )}

            {/* RICH TEXT SECTION */}
            <div className="rich-text text-lg text-content-muted">
              <Markdown
              // components={{
              //   li: ({ node, ...props }) => <span>hello</span>,
              // }}
              >
                {content}
              </Markdown>
            </div>
            {resultsMedia && (
              <div className="w-full flex flex-col gap-4 mt-12">
                {resultsMedia.map((media) => (
                  <Image
                    key={media.url}
                    src={strapiImageUrl({ url: media.url })}
                    alt={media.alternativeText}
                    className="w-full h-auto rounded-md"
                    width={1280}
                    height={720}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
