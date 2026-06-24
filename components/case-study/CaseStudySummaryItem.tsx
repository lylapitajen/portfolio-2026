import Markdown from "react-markdown";

type Props = {
  label: "problem" | "role" | "result";
  content: string;
};

export default function CaseStudySummaryItem({ label, content }: Props) {
  return (
    <div className="p-10 border-b md:border-r md:border-b-0 last:border-0 flex flex-col gap-2">
      <h3 className="all-caps text-accent">{label}</h3>
      <div className="rich-text [&_p]:mb-0">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
