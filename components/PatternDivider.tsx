type Pattern = "grid" | "dots" | "diagonal";
type Size = "sm" | "md" | "lg";

type Props = {
  pattern?: Pattern;
  size?: Size;
};

const patternClass: Record<Pattern, string> = {
  grid: "bg-pattern-grid",
  dots: "bg-pattern-dots",
  diagonal: "bg-pattern-diagonal",
};

const sizeClass: Record<Size, string> = {
  sm: "h-20",
  md: "h-28",
  lg: "h-36",
};

export default function PatternDivider({ pattern = "diagonal", size = "md" }: Props) {
  return <div className={`border-y w-full ${patternClass[pattern]} ${sizeClass[size]}`} />;
}
