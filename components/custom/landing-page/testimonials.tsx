import React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <>
      <div className="relative flex max-w-[1440px] items-center justify-center gap-24 rounded-[30px] bg-light-gray p-6 lg:rounded-[48px]">
        <Button
          onClick={() => api?.scrollTo(current - 1)}
          className="absolute bottom-[11px] left-[127px] size-14 bg-transparent p-0 xl:static"
        >
          <img src="/icons/left.svg" alt="Arrow left" />
        </Button>
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          className="h-full max-w-[944px]"
        >
          <div className="mx-auto mb-6 size-12 bg-[url(/icons/quote.svg)] bg-contain lg:mb-16 lg:size-14" />
          <CarouselContent className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="flex h-full flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <p className="b2-mobile-regular lg:t2-regular mb-6 w-[310px] text-center text-primary-foreground lg:mb-20 lg:w-[944px]">
                    As a doctor, I don't have time for investment research,
                    prior to launching Tiger Wealth Capital, Danny made me over
                    7x my money with one stock recommendation in 1 year. It was
                    game changing as a resident physician not making my full
                    salary yet. I highly recommend signing up for Tiger's Stock
                    Advisor!
                  </p>
                  <span className="b2-regular lg:b1-regular mb-16 block text-secondary-foreground">
                    - Dr. RACHEL S.
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Button
          onClick={() => api?.scrollTo(current + 1)}
          className="absolute right-[127px] bottom-[11px] size-14 bg-transparent p-0 xl:static"
        >
          <img src="/icons/right.svg" alt="Arrow right" />
        </Button>
      </div>
    </>
  );
}

export default Testimonials;
