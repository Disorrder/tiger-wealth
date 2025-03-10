import Link from "next/link";
import { Button } from "~/components/ui/button";
import GreenCircle from "../icon/green-circle";
import RedCircle from "../icon/red-circle";
import BaseCard from "./base-card";
import Heading from "./headings/heading";
import Subheading from "./headings/subheading";

function CTA() {
  return (
    <BaseCard className="relative max-w-[1440px] overflow-hidden bg-vampire-black px-6 py-10 lg:py-20">
      <GreenCircle className="-translate-y-3/5 top-0 right-0 size-[402px] translate-x-3/5 blur-[277px]" />
      <RedCircle className="-translate-x-1/2 bottom-0 left-0 size-[402px] translate-y-[100%] blur-[277px]" />
      <Heading>
        Your Path to <span className="text-accent">Financial Freedom</span>{" "}
        Starts Here!
      </Heading>
      <Subheading className="mb-6">
        Our Mission: To Make The Everyday Investor Wealthier
      </Subheading>
      <Button className="mx-auto mt-auto w-[134px] lg:w-[184px]">
        <Link href="/sign-up">SUBSCRIBE NOW</Link>
      </Button>
    </BaseCard>
  );
}

export default CTA;
