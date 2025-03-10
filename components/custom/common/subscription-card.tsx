import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { RadioGroupItem } from "~/components/ui/radio-group";
import type { SubscriptionCardData } from "~/lib/types";
import { cn } from "~/lib/utils";

type SubscriptionCardProps = {
  cardData: SubscriptionCardData;
};

function SubscriptionCard({ cardData }: SubscriptionCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!cardData.isAccent ? (
        <Card
          className={cn(
            "relative flex w-[358px] flex-col rounded-[20px] border-none bg-light-gray lg:h-[798px] lg:w-[448px] lg:rounded-[48px] lg:px-6 lg:py-12",
            isOpen ? "h-[580px] px-4 py-6" : "h-[116px] p-4",
          )}
        >
          <Collapsible
            className="flex h-full flex-col"
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <div className={cn("flex w-full justify-between lg:hidden")}>
              {" "}
              <RadioGroupItem
                className="size-[18px]"
                value="3 months"
                id="option1"
              />
              <CollapsibleTrigger asChild>
                <Button className="relative z-30 px-0" variant="ghost">
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  <span className="sr-only">Open/close subscription card</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <h2
              className={cn(
                "lg:t1-bold mb:4 lg:mb-3",
                isOpen ? "b1-bold" : "b2-mobile-bold",
              )}
            >
              {cardData.title}
            </h2>
            <h3 className="mb-6 space-x-2 lg:mb-12">
              <span className="lg:t1-regular b2-regular font-bold text-accent">
                {cardData.price.newPrice}
              </span>
              <span className="b3-bold lg:t2-bold text-secondary-foreground line-through">
                {cardData.price.oldPrice}
              </span>
              <span className="b3-bold lg:t2-bold">
                {cardData.price.discount}
              </span>
            </h3>
            <CollapsibleContent className="flex grow flex-col space-y-2 overflow-hidden">
              {" "}
              <h4 className="b2-mobile-regular lg:b1-regular mb-2 text-secondary-foreground lg:mb-3">
                Benefits
              </h4>
              <Accordion type="single" collapsible defaultValue="item-1">
                <ul className="relative z-30 space-y-3 lg:space-y-4">
                  {cardData.benefits.map((benefit, ind) => (
                    <li className="flex gap-2" key={benefit.benefitTitle}>
                      <div className="size-[18px] bg-[url(/icons/trending-up.svg)] bg-contain bg-no-repeat lg:size-6" />
                      <AccordionItem
                        className="w-full"
                        value={`item-${ind + 1}`}
                      >
                        <AccordionTrigger className="b3-regular lg:b2-regular flex items-baseline text-start font-bold">
                          {benefit.benefitTitle}
                        </AccordionTrigger>
                        <AccordionContent className="b3-regular lg:b2-regular mt-1 w-[268px] text-secondary-foreground lg:w-[336px]">
                          {benefit.benefitDescription}
                        </AccordionContent>
                      </AccordionItem>
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Button
                className="mt-auto h-[42px] w-[326px] lg:h-12 lg:w-[400px]"
                variant="outline"
              >
                <Link className="b2-bold z-10" href="/sign-up">
                  SUBSCRIBE NOW
                </Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ) : (
        <div
          className={cn(
            "relative flex items-center overflow-hidden rounded-[20px] bg-gradient-to-r from-paradise-red to-light-green p-[1px] lg:h-[798px] lg:w-[448px] lg:rounded-[48px]",
            isOpen ? "h-[580px] w-[358px]" : "h-[116px]",
          )}
        >
          <div className="b3-bold lg:b2-mobile-bold absolute top-16 right-[1px] flex h-[26px] w-[83px] rounded-l-full bg-gradient-to-r from-paradise-red to-light-green px-[10px] py-[3px] text-traffic-white lg:top-5 lg:h-[30px] lg:w-[93px]">
            <div className="m-auto">Best Buy</div>
          </div>
          <Card
            className={cn(
              "flex w-[356px] flex-col rounded-[19px] border-none bg-vampire-black px-[14px] py-6 lg:h-[796px] lg:w-[448px] lg:rounded-[47px] lg:px-4 lg:py-12",
              isOpen ? "h-[578px]" : "h-[114px] py-4",
            )}
          >
            <Collapsible
              className="flex h-full flex-col"
              open={isOpen}
              onOpenChange={setIsOpen}
              defaultOpen={true}
            >
              <div className={cn("flex w-full justify-between lg:hidden")}>
                {" "}
                <RadioGroupItem
                  className="size-[18px]"
                  value="3 months"
                  id="option2"
                />
                <CollapsibleTrigger asChild>
                  <Button className="relative z-30 px-0" variant="ghost">
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    <span className="sr-only">
                      Open/close subscription card
                    </span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <h2
                className={cn(
                  "lg:t1-bold mb:4 lg:mb-3",
                  isOpen ? "b1-bold" : "b2-mobile-bold",
                )}
              >
                Yearly (1 Year)
              </h2>
              <h3 className="mb-6 space-x-2 lg:mb-12">
                <span className="lg:t1-regular b2-regular mb-2 font-bold text-accent">
                  {cardData.price.newPrice}
                </span>
                <span className="b3-bold lg:t2-bold text-secondary-foreground line-through">
                  {cardData.price.oldPrice}
                </span>
                <span className="b3-bold lg:t2-bold">
                  {cardData.price.discount}
                </span>
              </h3>
              <CollapsibleContent className="flex grow flex-col space-y-2 overflow-hidden">
                {" "}
                <h4 className="b2-mobile-regular lg:b1-regular mb-2 text-secondary-foreground lg:mb-3">
                  Benefits
                </h4>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <ul className="relative z-30 space-y-3 lg:space-y-4">
                    {cardData.benefits.map((benefit, ind) => (
                      <li className="flex gap-2" key={benefit.benefitTitle}>
                        <div className="size-[18px] bg-[url(/icons/trending-up.svg)] bg-contain bg-no-repeat lg:size-6" />
                        <AccordionItem
                          className="w-full"
                          value={`item-${ind + 1}`}
                        >
                          <AccordionTrigger className="b3-regular lg:b2-regular flex items-baseline text-start font-bold">
                            {benefit.benefitTitle}
                          </AccordionTrigger>
                          <AccordionContent className="b3-regular lg:b2-regular mt-1 w-[268px] text-secondary-foreground lg:w-[336px]">
                            {benefit.benefitDescription}
                          </AccordionContent>
                        </AccordionItem>
                      </li>
                    ))}
                  </ul>
                </Accordion>
                <Button
                  className="mt-auto h-[42px] w-[326px] lg:h-12 lg:w-[400px]"
                  variant="outline"
                >
                  <Link className="b2-bold z-10" href="/sign-up">
                    SUBSCRIBE NOW
                  </Link>
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      )}
    </>
  );
}

export default SubscriptionCard;
