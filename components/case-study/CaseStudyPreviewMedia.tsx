import Image from "next/image";
import { strapiImageUrl } from "@/lib/utils";
import { type CaseStudy } from "@/lib/api/caseStudies";

type Props = {
  previewMedia?: CaseStudy["previewMedia"];
  className?: string;
};

export default function CaseStudyPreviewMedia({ previewMedia, className }: Props) {
  return (
    <div
      className={`aspect-video relative w-full overflow-hidden bg-bg-secondary bg-pattern-dots transition-colors ${
        className ?? ""
      }`}
    >
      {previewMedia && (
        <Image
          src={strapiImageUrl({ url: previewMedia.url })}
          alt={previewMedia.alternativeText ?? ""}
          fill
          className="object-cover"
          quality={90}
          sizes="(min-width: 1440px) 720px, (min-width: 768px) 50vw, 100vw"
          unoptimized
        />
      )}
    </div>
  );
}
