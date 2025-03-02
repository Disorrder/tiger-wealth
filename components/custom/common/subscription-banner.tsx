import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import CardWithCandles from "./card-with-candles";
import Heading from "./heading";
import Subheading from "./subheading";
import UnderlinedText from "./underlined-text";

function SubscriptionBanner() {
  return (
    <CardWithCandles>
      <div className="flex h-full flex-col justify-center px-4 pt-10 pb-14 lg:pt-32 lg:pb-4">
        <div>
          <Heading className="max-w-[325px] lg:max-w-[940px]">
            Join the growing community of people making better investment
            decisions with{" "}
            <span className="text-accent">Tiger&apos;s Pulse Newsletter</span>
          </Heading>
          <Subheading className="mx-auto mb-[33px] max-w-[325px] text-secondary-foreground lg:max-w-full">
            Tiger Wealth Capital gives you tailored investment guidance that&apos;s
            simple, direct, and trustworthy.
          </Subheading>
          <div className="relative z-10 mb-[33px] flex items-center justify-center gap-3 lg:mb-16">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    className="w-[203px] placeholder:text-traffic-white lg:w-[368px]"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </form>
            <Button className="h-[42px] w-[115px] lg:h-12 lg:w-[169px]" asChild>
              <Link href="/login">GET STARTED</Link>
            </Button>
          </div>
        </div>
        <p className="lg:b3-regular b left-0 z-10 mx-auto max-w-[340px] text-center font-pt-serif text-[10px]/[1.4] text-secondary-foreground lg:max-w-[928px]">
          *By clicking GET STARTED, you agree to allow Tiger Wealth Capital to
          store your name and email address for the purpose of sending you our
          newsletter and related updates, and you agree to our{" "}
          <UnderlinedText>
            <Link href="/terms-of-service">Terms of Service</Link>
          </UnderlinedText>
          ,{" "}
          <UnderlinedText>
            <Link href="/terms-of-condidions">Terms and Conditions</Link>
          </UnderlinedText>{" "}
          and{" "}
          <UnderlinedText>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </UnderlinedText>
          .
        </p>
      </div>
    </CardWithCandles>
  );
}

export default SubscriptionBanner;
