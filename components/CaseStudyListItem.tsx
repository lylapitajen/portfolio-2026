import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  shortSummary: string;
  homeImageBgColor: string;
  clientLogo: string;
};

export default function CaseStudyListItem({
  title,
  shortSummary,
  homeImageBgColor,
  clientLogo,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`flex items-center justify-center h-[400px] w-full rounded-md`}
        style={{ backgroundColor: homeImageBgColor }}
      >
        <Image
          src={`/client-logos/${clientLogo}`}
          alt={`${title} logo`}
          height={200}
          width={200}
          className="h-10!"
        />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <div className="flex gap-2 flex-col-reverse items-start sm:flex-row sm:items-center">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="uppercase text-sm text-content-muted py-1 px-2 bg-neutral-100 rounded-sm tracking-wide">
            Coming soon
          </span>
        </div>
        <p className="text-content-muted w-full leading-snug">{shortSummary}</p>
      </div>
    </div>
  );
}
