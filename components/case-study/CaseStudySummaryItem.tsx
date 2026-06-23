type Props = {
  label: "problem" | "role" | "result";
  content: string;
};

export default function CaseStudySummaryItem({ label, content }: Props) {
  return (
    <div className="p-10 border-r border-border last:border-0 flex flex-col gap-2">
      <h3 className="all-caps text-accent">{label}</h3>
      <p>{content}</p>
    </div>
  );
}
