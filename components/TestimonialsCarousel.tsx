import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn/carousel";
import { testimonials } from "@/app/data";
export default function TestimonialsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {testimonials.map((testimonial, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col justify-between gap-10 bg-neutral-100 p-6 rounded-md h-full">
              <p className="text-lg font-medium">{testimonial.text}</p>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 rounded-full bg-neutral-200"></div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-neutral-600">
                    {testimonial.authorJobTitle}, {testimonial.clientCompany}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
