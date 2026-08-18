import Link from "next/link";
import { type CaseStudy } from "@/lib/api/caseStudies";
import CaseStudyPreviewMedia from "@/components/case-study/CaseStudyPreviewMedia";

export default function CaseStudyListItem({
  title,
  shortSummary,
  slug,
  previewMedia,
}: Pick<CaseStudy, "title" | "shortSummary" | "slug" | "previewMedia">) {
  return (
    <Link href={`/${slug}`} className="group flex flex-col gap-8 overflow-hidden p-tile hover:bg-neutral-50">
      <CaseStudyPreviewMedia previewMedia={previewMedia} className="border group-hover:bg-bg-primary" />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-sans font-bold">{title}</h3>
        <p className="text-fg-secondary">{shortSummary}</p>
      </div>
    </Link>
  );
}
