export default function ExperienceListItem({
  company,
  description,
}: {
  company: string;
  description: string;
}) {
  return (
    <div className="flex max-[420px]:flex-col gap-8 max-[420px]:gap-4 md:gap-12 pb-8 border-b">
      <h3 className="text-xl font-medium w-full max-w-20 max-[420px]:max-w-full md:max-w-40">
        {company}
      </h3>
      <p className="text-content-muted">{description}</p>
    </div>
  );
}
