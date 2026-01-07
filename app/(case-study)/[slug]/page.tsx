import { getOneCaseStudy, getAllCaseStudies } from "@/lib/api/caseStudies";
import Image from "next/image";
import Markdown from "react-markdown";
import Layout from "@/components/Layout";
import { strapiImageUrl } from "@/lib/utils";

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title, content, longSummary, client, resultsMedia } = await getOneCaseStudy(slug);

  return (
    <Layout navTheme="dark" backgroundColor={client.brandColor}>
      <main className="flex flex-col gap-20 min-h-screen w-full">
        <section className="flex flex-col min-h-[90vh] pt-20" style={{ backgroundColor: client.brandColor }}>
          <div className="screen-max-width-wrapper">
            <div className="flex flex-col gap-2 items-start max-w-3xl">
              <Image
                src={strapiImageUrl({ url: client.logo.url })}
                height={200}
                width={200}
                alt={`${client.name} logo`}
                className="w-36! mb-6"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-50 mb-2">{title}</h1>
              <p className="text-neutral-200 text-xl">{longSummary}</p>
            </div>
          </div>
        </section>
        <section className="w-full bg-background">
          <div className="screen-max-width-wrapper pt-12">
            <div className="rich-text max-w-4xl text-xl text-content-muted">
              <Markdown>{content}</Markdown>
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
