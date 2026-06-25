import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function NavItem({ children, className }: Props) {
  return (
    <div
      className={`flex flex-row items-center py-2 px-4 border-r border-border-strong hover:bg-bg-element-hover first:border-l text-fg-secondary ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
