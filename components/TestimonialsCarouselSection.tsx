"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/app/data";
import { Button } from "./shadcn/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function TestimonialsCarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <section className="flex flex-col gap-8 py-10">
        <div className="flex justify-between items-center pb-2 border-b">
          <h2 className="text-sm uppercase tracking-wide text-content-hint">
            Testimonials
          </h2>
          <div className="flex gap-2 items-center">
            <Button variant="outline" size="icon" onClick={scrollPrev}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext}>
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex mr-4">
            {testimonials.map((testimonial, i) => (
              <div
                className="embla__slide flex-none basis-full md:basis-1/2 lg:basis-1/3 mr-4"
                key={i}
              >
                <div className="flex flex-col justify-between gap-10 bg-neutral-100 p-6 rounded-md h-full">
                  <p className="text-lg font-medium">{testimonial.text}</p>
                  <div className="flex gap-2 items-center">
                    <div
                      className="h-11 w-11 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: testimonial.homeAvatarBgColor }}
                    >
                      <Image
                        src={`/client-logos/${testimonial.clientLogo}`}
                        height={24}
                        width={24}
                        alt={`${testimonial.clientCompany} logo`}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-content-muted">
                        {testimonial.authorJobTitle},{" "}
                        {testimonial.clientCompany}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
