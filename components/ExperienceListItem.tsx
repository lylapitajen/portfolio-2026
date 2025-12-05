export default function ExperienceListItem({
  company,
  description,
  key,
}: {
  company: string;
  description: string;
  key: number;
}) {
  return (
    <div key={key} className="flex gap-12 pb-8 border-b">
      <h3 className="text-xl font-medium w-full max-w-40">{company}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}
