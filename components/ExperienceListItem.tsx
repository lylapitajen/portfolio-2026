import Markdown from "react-markdown";
import { formatDate } from "@/lib/utils";

type Props = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

export default function ExperienceListItem({ jobTitle, company, startDate, endDate, description }: Props) {
  const duration = `${formatDate(startDate)} – ${endDate ? formatDate(endDate) : "Present"}`;

  return (
    <div className="px-tile py-12 grid gap-4 md:grid-cols-3 md:gap-8 border-b last:border-0">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg md:text-xl font-sans font-bold">{jobTitle}</h3>
        <div className="flex flex-row flex-wrap gap-1 items-center text-fg-secondary">
          <span className="block text-sm text-fg-tertiary">{duration}</span>
          <span>|</span>
          <span className="text-sm text-fg-secondary">{company}</span>
        </div>
      </div>
      <div className="rich-text col-span-2">
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
}
