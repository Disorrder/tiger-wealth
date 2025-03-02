import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

function CustomCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="flex h-full flex-col justify-between"
          >
            <div className="flex flex-col items-center p-1">
              <p className="t2-regular mb-20 text-center text-primary-foreground">
                As a doctor, I don't have time for investment research, prior to
                launching Tiger Wealth Capital, Danny made me over 7x my money
                with one stock recommendation in 1 year. It was game changing as
                a resident physician not making my full salary yet. I highly
                recommend signing up for Tiger's Stock Advisor!
              </p>
              <span className="b1-regular block text-secondary-foreground">
                - Dr. RACHEL S.
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CustomCarousel;
