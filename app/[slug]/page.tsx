import { getOneCaseStudy, getAllCaseStudies } from "@/lib/api/caseStudies";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log("slug", slug);
  const { title, content, longSummary, client } = await getOneCaseStudy(slug);
  return (
    <main className="flex flex-col gap-20 min-h-screen w-full">
      <section className="flex flex-col min-h-screen pt-20" style={{ backgroundColor: client.brandColor }}>
        <div className="flex flex-col gap-2 max-w-3xl">
          <Image src={client.logo.url} height={100} width={100} alt={`${client.name} logo`} className="h-8! mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-50">{title}</h1>
          <p className="text-neutral-100 text-xl">{longSummary}</p>
        </div>
      </section>
      <section>
        <div className="text-content-default">{content}</div>
      </section>
    </main>
  );
}
