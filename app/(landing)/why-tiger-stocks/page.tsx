"use client";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BaseCard from "~/components/custom/common/base-card";
import CTA from "~/components/custom/common/cta";
import FeatureCard from "~/components/custom/common/feature-card";
import Heading from "~/components/custom/common/headings/heading";
import Subheading from "~/components/custom/common/headings/subheading";
import Logo from "~/components/custom/common/logo";
import SubscriptionCard from "~/components/custom/common/subscription-card";
import GreenCircle from "~/components/custom/icon/green-circle";
import RedCircle from "~/components/custom/icon/red-circle";
import { Button } from "~/components/ui/button";
import { RadioGroup } from "~/components/ui/radio-group";
import {
  FEATURE_CARDS_DATA,
  SUBSCRIPTIONS_CARDS_DATA_1,
  SUBSCRIPTIONS_CARDS_DATA_2,
} from "~/lib/const";

function WhyTigerStocksPage() {
  return (
    <div className="space-y-20 overflow-hidden pt-10 pb-20 lg:space-y-40 lg:pt-20 lg:pb-40">
      <section className="container relative mx-auto px-4">
        <GreenCircle className="top-0 right-0 translate-x-1/3 translate-y-36 lg:translate-x-140" />
        <Heading className="mb-6 xl:mb-12">
          Be a Part of a <br />{" "}
          <span className="text-accent">Growing Investors Community</span>
        </Heading>
        <BaseCard className="relative space-y-4 overflow-hidden rounded-[30px] bg-vampire-black p-4 lg:flex lg:gap-4 lg:p-0 lg:pt-12 lg:pr-0 lg:pb-0 lg:pl-20">
          <RedCircle className="lg:-translate-y-[15%] top-0 right-0 translate-x-1/3 lg:translate-x-[15%]" />
          <GreenCircle className="-translate-x-2/3 lg:-translate-x-[15%] bottom-0 left-0 lg:translate-y-[70%]" />
          <Image
            className="mx-auto lg:order-2 lg:mt-auto lg:mr-0 lg:mb-0 lg:ml-auto lg:rounded-[48px] xl:h-[600px] xl:w-[648px]"
            src="/images/raster/hand-with-candles.png"
            width={326}
            height={305}
            alt="Hand with sparkling candles"
          />
          <div className="flex flex-col space-y-4 lg:order-1 lg:justify-center">
            <h2 className="b2-bold xl:t2-bold text-accent lg:text-primary-foreground xl:max-w-[500px]">
              Unlock Unlimited Access with Tiger Wealth Capital Premium
            </h2>
            <div className="space-y-4 lg:mb-12">
              {" "}
              <p className="b2-mobile-regular xl:b2-regular text-secondary-foreground xl:max-w-[572px]">
                Join a growing community of investors, just like you, who are
                transforming their financial future with Tiger Wealth Capital
                Premium.
              </p>
              <p className="b2-mobile-regular xl:b2-regular text-secondary-foreground xl:max-w-[572px]">
                With a wealth of stock recommendations and expert insights,
                you’ll have the tools you need to make smarter investment
                decisions. Take control of your portfolio and start building
                your path to financial independence today.
              </p>
              <p className="b2-mobile-regular xl:b2-regular text-secondary-foreground xl:max-w-[572px]">
                <span className="font-bold text-accent">Special Offer:</span>{" "}
                New members can join now for{" "}
                <span className="font-bold text-accent">only $199</span>{" "}
                <span className="line-through"> (originally $399)</span>. Don’t
                miss this opportunity to potentially amplify your net worth—sign
                up today.
              </p>
            </div>

            <Button
              className="mx-auto w-[134px] lg:mr-auto lg:ml-0 lg:w-[184px]"
              asChild
            >
              <Link className="b2-bold" href="/sign-up">
                SUBSCRIBE NOW
              </Link>
            </Button>
          </div>
        </BaseCard>
      </section>
      <section className="container xs:m-0 mx-auto px-4">
        <Heading className="w-[251px] md:w-full xl:mb-6">
          <span className="text-accent"> Tiger’s Stock Picks</span> is Easy and
          Direct
        </Heading>
        <Subheading className="mx-auto mb-6 max-w-82 lg:max-w-[860px]">
          As a member, you’ll gain access to succinct expert insights designed
          to save you time and effort, letting you focus on the joy of investing
          rather than sifting through endless research.
        </Subheading>
        <div className="relative grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 lg:gap-12 2xl:grid-cols-3">
          <RedCircle className="-translate-y-[30%] -translate-x-140 -z-10 top-0 left-0 hidden lg:block" />
          {FEATURE_CARDS_DATA.map((card, index) => (
            <div key={card.title}>
              <FeatureCard index={index} featureCardData={card} />
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4">
        <Heading className="mb-6 w-[250px] lg:w-full xl:mb-12">
          Tiger&apos;s Stock Picks{" "}
          <span className="text-accent">Beat The Market</span>
        </Heading>
        <div className="gap-12 space-y-4 2xl:flex">
          <div className="lg:order-2">
            <div className="mb-6 flex justify-center gap-11 lg:mb-8 lg:gap-24">
              <figure className="mb-11 w-[108px] lg:w-[275px]">
                <div className="relative mx-auto mb-2 h-[150px] w-[74px] lg:mb-6 lg:h-[384px] lg:w-[200px]">
                  <ChevronUp className="-translate-y-[9px] -translate-x-1/2 absolute left-1/2 transform text-primary-foreground" />
                  <div className="absolute inset-0 m-auto h-[150px] w-[2px] bg-primary-foreground lg:h-[384px]" />
                  <div className="absolute bottom-0 flex h-[70%] w-full items-center justify-center rounded-[12px] bg-gradient-to-r from-gradient-cta-from to-gradient-cta-to lg:rounded-3xl">
                    <span className="b2-bold lg:h3-bold text-traffic-white">
                      XX%
                    </span>
                  </div>
                </div>
                <Logo className="w-[108px] lg:w-[275px]" theme="dark" />
              </figure>
              <figure className="w-[108px] lg:w-[275px]">
                <div className="relative mx-auto mb-2 h-[150px] w-[74px] lg:mb-6 lg:h-[384px] lg:w-[200px]">
                  <ChevronUp className="-translate-y-[9px] -translate-x-1/2 absolute left-1/2 transform text-primary-foreground" />
                  <div className="absolute inset-0 m-auto h-[150px] w-[2px] bg-primary-foreground lg:h-[384px]" />
                  <div className="absolute bottom-0 flex h-[30%] w-full items-center justify-center rounded-[12px] bg-light-gray lg:rounded-3xl">
                    <span className="b2-bold lg:h3-bold text-traffic-white">
                      XX%
                    </span>
                  </div>
                </div>
                <span className="b3-regular lg:t1-regular block text-center text-primary-foreground">
                  S&P 500
                </span>
              </figure>
            </div>
            <h2 className="b2-bold lg:t1-bold mb-3 text-primary-foreground 2xl:max-w-[450px]">
              Tiger Wealth Capital has Outperformed Competitors
            </h2>
            <p className="b2-mobile-regular lg:b1-regular text-secondary-foreground 2xl:max-w-[572px]">
              At Tiger Wealth Capital, we pride ourselves on delivering
              exceptional results by diving deep into every industry to uncover
              overlooked stocks with strong potential. We focus on identifying
              opportunities in companies that are often under Wall Street’s
              radar, aiming to find those poised for significant growth and
              market impact.
            </p>
          </div>
          <BaseCard className="relative mx-auto flex h-[321px] w-[358px] items-end justify-end overflow-hidden rounded-[30px] bg-vampire-black p-0 lg:order-1 lg:size-[820px] lg:bg-light-gray">
            <RedCircle className="-translate-y-[10%] top-0 right-0 size-[126px] translate-x-[10%] lg:hidden" />
            <GreenCircle className="-translate-x-1/3 bottom-0 left-0 size-[134px] translate-y-1/4 lg:hidden" />
            <Image
              className="h-[305px] lg:size-[772px]"
              src="/images/raster/man-with-monitors.png"
              width={342}
              height={305}
              alt="Man in front of monitors with graphycs"
            />
          </BaseCard>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <Heading>
          <span className="text-accent">We Invest</span> in Every Stock <br />
          <span className="text-accent">We Offer</span> Content on
        </Heading>
        <Subheading className="mx-auto max-w-[330px] lg:max-w-[945px]">
          Unlike other sites that cover every industry, offer high numbers of
          stock picks, and don’t put their money where their mouth is we go with
          you for the ride and offer quality over quantity
        </Subheading>
        <RadioGroup className="flex flex-wrap justify-center gap-6">
          <SubscriptionCard cardData={SUBSCRIPTIONS_CARDS_DATA_1} />
          <SubscriptionCard cardData={SUBSCRIPTIONS_CARDS_DATA_2} />
        </RadioGroup>
      </section>
      <div className="container mx-auto px-4">
        <CTA />
      </div>
    </div>
  );
}

export default WhyTigerStocksPage;
