type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CrosshairFrame({ children, className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Horizontal lines extending past left and right edges */}
      <span className="absolute top-0 -left-2 -right-2 h-px bg-border-strong" />
      <span className="absolute bottom-0 -left-2 -right-2 h-px bg-border-strong" />
      {/* Vertical lines extending past top and bottom edges */}
      <span className="absolute left-0 -top-2 -bottom-2 w-px bg-border-strong" />
      <span className="absolute right-0 -top-2 -bottom-2 w-px bg-border-strong" />
      {children}
    </div>
  );
}
