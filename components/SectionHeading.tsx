type Props = {
  text: string;
};

export default function SectionHeading({ text }: Props) {
  return (
    <div className="border-b px-tile py-2 bg-bg-secondary">
      <h2 className="all-caps text-accent">{text}</h2>
    </div>
  );
}
