import Image from "next/image";
import { type Testimonial } from "@/lib/api/testimonials";
import { strapiImageUrl } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import CrosshairFrame from "./CrosshairFrame";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({ testimonials }: Props) {
  return (
    <section className="flex flex-col">
      <SectionHeading text="Testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-strong">
        {testimonials.slice(0, 3).map((testimonial, i) => (
          <div key={i} className="flex flex-col justify-between gap-10 p-tile">
            <p className="text-fg-primary">{testimonial.content}</p>
            <div className="flex items-center gap-4">
              <CrosshairFrame>
                <div className="h-10 w-10 shrink-0 flex items-center justify-center">
                  <Image
                    src={strapiImageUrl({ url: testimonial.client.squareLogo.url })}
                    height={32}
                    width={32}
                    alt={`${testimonial.client.name} logo`}
                  />
                </div>
              </CrosshairFrame>
              <div>
                <p className="font-bold font-sans text-fg-primary mb-1">{testimonial.author}</p>
                <p className="text-sm text-fg-secondary">
                  {testimonial.authorJobTitle}, {testimonial.client.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
