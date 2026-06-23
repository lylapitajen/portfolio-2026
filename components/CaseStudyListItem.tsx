import Link from "next/link";
import Image from "next/image";
import { type CaseStudy } from "@/lib/api/caseStudies";
import { strapiImageUrl } from "@/lib/utils";

export default function CaseStudyListItem({
  title,
  shortSummary,
  client,
  slug,
}: Pick<CaseStudy, "title" | "shortSummary" | "client" | "slug">) {
  return (
    <Link href={`/${slug}`} className="group flex flex-col gap-4 overflow-hidden p-tile hover:bg-neutral-50">
      <div className="flex items-center justify-center h-80 w-full p-2 bg-bg-secondary group-hover:bg-bg-primary bg-pattern-dots border transition-colors">
        <Image
          src={strapiImageUrl({ url: client.logo.url })}
          alt={`${title} logo`}
          height={200}
          width={200}
          className="h-8! w-auto!"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-sans font-bold">{title}</h3>
        <p className="text-fg-secondary">{shortSummary}</p>
      </div>
    </Link>
  );
}
