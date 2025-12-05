import Link from "next/link";
export default function ExperienceListItem({
  title,
  shortSummary,
  key,
}: {
  title: string;
  shortSummary: string;
  key: number;
}) {
  return (
    <Link key={key} href="/">
      <div className="flex flex-col gap-4">
        <div className="bg-neutral-100 h-[400px] w-full rounded-lg"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-neutral-600 max-w-[70%] leading-snug">
            {shortSummary}
          </p>
        </div>
      </div>
    </Link>
  );
}
