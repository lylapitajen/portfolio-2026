import Image from "next/image";

type Props = {
  name: string;
  className?: string;
  children: React.ReactNode;
};

export default function FigmaComponentFrame({ name, className, children }: Props) {
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <div className="flex items-center gap-1 mb-2">
        <Image src="/figma-component-icon.svg" alt="" width={12} height={12} />
        <span className="text-xs text-[#9747FF] font-sans">{name}</span>
      </div>
      <div className="relative p-10">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="none" stroke="#9747FF" strokeWidth="1" strokeDasharray="10 8" rx="8" />
        </svg>
        {children}
      </div>
    </div>
  );
}
