type Props = {
  jobTitle: string;
  duration: string;
  description: string;
};
export default function ExperienceListItem({ jobTitle, description, duration }: Props) {
  return (
    <div className="px-tile py-12 grid grid-cols-3 max-[420px]:flex-col gap-8 max-[420px]:gap-2 md:gap-12 border-b last:border-0">
      <div>
        <h3 className="text-xl font-sans font-bold">{jobTitle}</h3>
        <span className="text-sm text-fg-secondary">{duration}</span>
      </div>
      <p className="text-fg-secondary col-span-2">{description}</p>
    </div>
  );
}
