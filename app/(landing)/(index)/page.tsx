"use client";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleCard from "~/components/custom/common/article-card";
import CardWithGradient from "~/components/custom/common/card-with-gradient";
import FeatureCard from "~/components/custom/common/feature-card";
import Heading from "~/components/custom/common/heading";
import HeroTable from "~/components/custom/common/hero-table";
import Logo from "~/components/custom/common/logo";
import Subheading from "~/components/custom/common/subheading";
import SubscriptionBanner from "~/components/custom/common/subscription-banner";
import SubscriptionCard from "~/components/custom/common/subscription-card";
import Testimonials from "~/components/custom/landing-page/testimonials";
import { Button } from "~/components/ui/button";
import { RadioGroup } from "~/components/ui/radio-group";
import {
  FEATURE_CARDS_DATA,
  SUBSCRIPTIONS_CARDS_DATA_1,
  SUBSCRIPTIONS_CARDS_DATA_2,
} from "~/lib/const";

function IndexPage() {
  return (
    <>
      <div className="space-y-20 overflow-hidden lg:space-y-40">
        <section className="container relative mx-auto px-4">
          <HeroTable />
          <div className="absolute right-20 bottom-0 size-[100px] rounded-full bg-light-green/40 blur-[36px] lg:right-60 lg:size-[600px] lg:blur-[80px]" />
          <div className="absolute bottom-0 left-20 size-[100px] rounded-full bg-paradise-red/40 blur-[36px] lg:left-60 lg:size-[600px] lg:blur-[80px] " />
        </section>
        <section className="container xs:m-0 mx-auto px-4">
          <Heading className="w-[251px] md:w-full">
            <span className="text-accent"> Tiger’s Stock Picks</span> is Easy
            and Direct
          </Heading>
          <Subheading className="mx-auto mb-6 lg:max-w-[860px]">
            As a member, you’ll gain access to succinct expert insights designed
            to save you time and effort, letting you focus on the joy of
            investing rather than sifting through endless research.
          </Subheading>
          <div className="relative grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 lg:gap-12 2xl:grid-cols-3">
            <div className="-z-10 absolute right-0 size-[100px] translate-y-64 rounded-full bg-light-green/20 blur-[69px] lg:size-[402px] lg:translate-x-1/2 lg:translate-y-[70%] lg:blur-[150px]" />
            <div className="-translate-y-[550px] -translate-x-1/3 lg:-translate-x-1/2 -z-10 lg:-translate-y-[300px] absolute bottom-0 left-0 size-[100px] rounded-full bg-paradise-red/20 blur-[69px] lg:size-[402px] lg:blur-[150px]" />
            {FEATURE_CARDS_DATA.map((card, index) => (
              <div key={card.title}>
                <FeatureCard index={index} featureCardData={card} />
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-4">
          <Heading className="mb-6 w-[210px] lg:w-full">
            Tiger’s Market
            <span className="text-accent"> Beating Leaderboard</span>
          </Heading>
          <div className="mb-6 flex justify-center gap-11 lg:mb-[53px] lg:gap-56">
            <figure className="w-[108px] lg:w-[275px]">
              <div className="relative mx-auto mb-2 h-[150px] w-[74px] lg:mb-12 lg:h-[448px] lg:w-[200px]">
                <ChevronUp className="-translate-y-[9px] -translate-x-1/2 absolute left-1/2 transform text-primary-foreground" />
                <div className="absolute inset-0 m-auto h-[150px] w-[2px] bg-primary-foreground lg:h-[448px]" />
                <div className=" absolute bottom-0 flex h-[70%] w-full items-center justify-center rounded-[12px] bg-gradient-to-r from-gradient-cta-from to-gradient-cta-to lg:h-[387px] lg:rounded-3xl">
                  <span className="b2-bold lg:h3-bold text-traffic-white">
                    XX%
                  </span>
                </div>
              </div>
              <Logo className="w-[108px] lg:w-[275px]" theme="dark" />
            </figure>
            <figure className="w-[108px] lg:w-[275px]">
              <div className="relative mx-auto mb-2 h-[150px] w-[74px] lg:mb-12 lg:h-[448px] lg:w-[200px]">
                <ChevronUp className="-translate-y-[9px] -translate-x-1/2 absolute left-1/2 transform text-primary-foreground" />
                <div className="absolute inset-0 m-auto h-[150px] w-[2px] bg-primary-foreground lg:h-[448px]" />
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
          <p className="lg:b2-mobile-regular mx-auto text-center font-pt-serif text-[10px]/[1.4] text-secondary-foreground lg:w-[800px]">
            Results are based on historical performance of SP500 closing prices
            from September 10, 2024 to present vs. the average return of Tiger
            Wealth Capital from the same date range.{" "}
          </p>
        </section>
        <section className="container mx-auto px-4">
          <Heading className="w-60 lg:w-full">
            Sign Up For{" "}
            <span className="text-accent"> Tiger’s Stock Picks</span> Today!
          </Heading>
          <Subheading className="mx-auto mb-6 w-[326px] lg:w-full">
            {" "}
            In the Future you will thank yourself for signing up for{" "}
            <span className="font-bold text-accent">
              Tiger’s Pulse Newsletter
            </span>{" "}
            and{" "}
            <span className="font-bold text-accent">
              Tiger’s Stock Leaderboard!
            </span>
            <span className="mt-2 block">
              Together We’ll Win Financial Freedom!
            </span>
          </Subheading>
          <RadioGroup defaultValue="comfortable">
            <div className="relative mx-auto flex flex-wrap justify-center gap-6 lg:gap-11">
              <div className="absolute top-[210px] left-[220px] size-[402px] rounded-full bg-light-green/40 blur-[277px] lg:left-0 lg:translate-x-1/4 lg:translate-y-[35%]" />
              <div className="lg:-translate-x-1/4 -top-[40px] -left-[190px] absolute size-[402px] rounded-full bg-paradise-red/40 blur-[277px] lg:left-0 lg:translate-y-[35%]" />
              <SubscriptionCard cardData={SUBSCRIPTIONS_CARDS_DATA_1} />
              <SubscriptionCard cardData={SUBSCRIPTIONS_CARDS_DATA_2} />
            </div>
          </RadioGroup>
        </section>
        <section className="container relative mx-auto px-4">
          <div className="-z-10 absolute right-0 hidden size-[402px] translate-x-[60%] translate-y-[35%] rounded-full bg-paradise-red/40 blur-[250px] lg:block" />
          <div className="-translate-x-[60%] -z-10 absolute left-0 hidden size-[402px] translate-y-[35%] rounded-full bg-light-green/40 blur-[250px] lg:block" />
          <Heading className="mb-6 lg:mb-12">Testimonials</Heading>
          <Testimonials />
        </section>
        <section className="container mx-auto px-4">
          <Heading className="mb-6 w-[200px] lg:mb-12 lg:w-full">
            Top Personal
            <span className="text-accent"> Finance Articles</span>
          </Heading>
          <div className="grig grid grid-cols-1 justify-items-center gap-6 lg:gap-12 2xl:grid-cols-3">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <SubscriptionBanner />
        </section>
        <section className="container relative mx-auto px-4">
          <div className="-z-10 -translate-x-5 absolute bottom-0 left-0 size-[133px] rounded-full bg-paradise-red/40 blur-[69px] lg:right-0 lg:size-[402px] lg:translate-x-[60%] lg:translate-y-[35%] lg:blur-[250px]" />
          <div className="lg:-translate-x-[60%] -z-10 absolute right-0 size-[133px] translate-x-16 translate-y-32 rounded-full bg-light-green/40 blur-[69px] lg:left-0 lg:size-[402px] lg:translate-y-[35%] lg:blur-[250px]" />
          <Heading className="mb-6 lg:mb-16">
            Meet The <span className="text-accent"> Founder</span>
          </Heading>
          <div className="mb-12 flex flex-col items-center xl:flex-row xl:justify-between ">
            <div className="order-2 lg:order-1 lg:w-[448px]">
              <h2 className="b2-bold lg:t2-bold mb-1 text-primary-foreground lg:mb-2">
                Danny Raymond Aoun
              </h2>
              <p className="b3-bold lg:b1-regular mb-4 text-secondary-foreground lg:mb-8">
                Tiger Wealth Capital - CEO & Founder
              </p>
              <h2 className="b2-bold lg:t2-bold mb-2 text-primary-foreground lg:mb-4">
                Vision
              </h2>
              <p className="b3-bold lg:b1-regular mb-4 text-secondary-foreground">
                At Tiger Wealth Capital, our vision is to revolutionize personal
                investing by making professional-grade financial insights and
                transformative stock opportunities accessible to everyone, just
                as I did for family and friends before founding this company. We
                aim to be the most trusted partner for wealth creation,
                simplifying complex markets into actionable pathways while
                empowering everyday investors to achieve financial independence
                in the world’s most innovative sectors, Biotechnology and
                Technology.
              </p>
            </div>

            <CardWithGradient className="order-1 mb-6 h-[478px] w-[358px] lg:order-2 lg:h-[596px] lg:w-[448px]">
              <Image
                src="/images/raster/danny.png"
                width={326}
                height={446}
                alt="Tigers wealth's founder Danny"
                className="mx-auto h-full w-full"
              />
            </CardWithGradient>

            <div className="order-3 lg:w-[448px]">
              <h2 className="b2-bold lg:t2-bold mb-2 text-primary-foreground lg:mb-4">
                Background
              </h2>
              <p className="b3-bold lg:b1-regular mb-4 text-secondary-foreground">
                Danny Aoun is a proud U.S. Military veteran, a graduate of
                Harvard, and Columbia Business School. He has over 10 years of
                experience investing in biotech and a successful career on Wall
                Street in New York. During his time in investment banking, Danny
                became an expert in finding exciting opportunities in
                fast-growing technology industries and built strong connections
                to financial professionals. As the founder of Tiger Wealth
                Capital, Danny uses his Wall Street experience and biotech
                knowledge to help people invest smarter. Known for his careful
                research and clear strategies, Danny works to make complex
                markets simple and help investors find the best ways to grow
                their money with trust and confidence.
              </p>
            </div>
          </div>
          <Button
            className="mx-auto mb-20 flex h-[42px] w-[115px] lg:mb-40 lg:h-12 lg:w-[151px]"
            asChild
          >
            <Link href="/login">CONTACT US</Link>
          </Button>
        </section>
      </div>
    </>
  );
}

export default IndexPage;
