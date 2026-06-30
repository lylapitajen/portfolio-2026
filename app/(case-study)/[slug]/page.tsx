import { getOneCaseStudy, getAllCaseStudies } from "@/lib/api/caseStudies";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import { strapiImageUrl } from "@/lib/utils";
import Link from "next/link";
import CaseStudySummaryItem from "@/components/case-study/CaseStudySummaryItem";
import CaseStudyPreviewMedia from "@/components/case-study/CaseStudyPreviewMedia";
import CrosshairFrame from "@/components/CrosshairFrame";
import PatternDivider from "@/components/PatternDivider";
import SectionHeading from "@/components/SectionHeading";

export const revalidate = 360; // seconds

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title, previewMedia, problemSummary, roleSummary, resultSummary, content, client } = await getOneCaseStudy(
    slug
  );

  return (
    <div className="bg-pattern-dots">
      <main className="screen-max-width-wrapper flex flex-col min-h-screen border-x bg-bg-primary">
        <section className=" flex flex-col">
          <div className="grid md:grid-cols-2 border-b">
            <div className="flex gap-3 items-center p-tile border-r">
              <CrosshairFrame>
                <Image
                  src={strapiImageUrl({ url: client.squareLogo.url })}
                  alt={`${title} logo`}
                  height={64}
                  width={64}
                  className="h-8! w-auto!"
                />
              </CrosshairFrame>

              <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl text-fg-primary">{title}</h1>
            </div>
            <CaseStudyPreviewMedia previewMedia={previewMedia} className="h-full border-t md:border-t-0" />
          </div>
          <div className="grid md:grid-cols-3">
            <CaseStudySummaryItem label="problem" content={problemSummary} />
            <CaseStudySummaryItem label="role" content={roleSummary} />
            <CaseStudySummaryItem label="result" content={resultSummary} />
          </div>
        </section>
        <PatternDivider />
        <section>
          <SectionHeading text="Deep Dive" />
          <div className="py-20 px-tile w-full">
            {/* RICH TEXT SECTION */}
            <div className="rich-text text-fg-primary mx-auto">
              <Markdown
                components={{
                  p: ({ children }) => {
                    const videoExts = [".mp4", ".webm", ".mov", ".ogg"];
                    const childArray = React.Children.toArray(children);
                    if (childArray.length >= 1 && React.isValidElement(childArray[0])) {
                      const child = childArray[0] as React.ReactElement<{ href?: string }>;
                      const href = child.props.href ?? "";
                      if (child.type === "a" && videoExts.some((ext) => href.toLowerCase().endsWith(ext))) {
                        const caption = childArray.slice(1);
                        return (
                          <>
                            <div className="max-w-5xl mx-auto my-8 bg-bg-secondary rounded-md p-12">
                              <video
                                autoPlay
                                playsInline
                                muted
                                loop
                                src={href}
                                controls
                                className="w-full rounded-md border"
                              />
                            </div>
                            {caption.length > 0 && (
                              <p className="max-w-5xl mx-auto mb-16 -mt-4 text-sm text-fg-secondary">{caption}</p>
                            )}
                          </>
                        );
                      }
                    }
                    return <p>{children}</p>;
                  },
                }}
              >
                {content}
              </Markdown>
            </div>
            {/* AGENCY CREDIT */}
            {client.agency && (
              <div className=" text-fg-secondary text-sm max-w-3xl mx-auto my-4  md:my-8">
                This project was completed as part of my role at
                <span className="inline-flex items-center gap-2 whitespace-nowrap ml-3 translate-y-1">
                  <CrosshairFrame>
                    <Image
                      src={strapiImageUrl({ url: client.agency.logo.url })}
                      alt={`${client.agency.name} logo`}
                      width={24}
                      height={24}
                      unoptimized
                    />
                  </CrosshairFrame>

                  <Link
                    href={client.agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer font-medium underline-offset-4 decoration-neutral-200"
                  >
                    {client.agency.name}
                  </Link>
                </span>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
