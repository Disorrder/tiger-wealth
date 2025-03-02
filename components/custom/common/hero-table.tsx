import Link from "next/link";
import { columns } from "~/app/(landing)/(index)/columns";
import { DataTable } from "~/app/(landing)/(index)/data-table";
import { Button } from "~/components/ui/button";
import { data } from "~/lib/mock";
import CardWithCandles from "./card-with-candles";
import Heading from "./heading";
import Subheading from "./subheading";

function HeroTable() {
  return (
    <>
      <div className="relative flex justify-center">
        <CardWithCandles className="absolute min-h-[364px] w-full max-w-[1440px] px-6 pt-[44px] xl:h-[888px] xl:pt-[84px] ">
          <div className="relative z-10 flex-col items-center">
            <Heading className="max-w-[700px]">
              Maximize your wealth with Expert{" "}
              <span className="text-accent">Stock Advice</span>
            </Heading>
            <Subheading className="mx-auto mb-4 max-w-[435px] text-secondary-foreground xl:max-w-[727px]">
              Expert insights, data-driven strategies, and personalized stock
              recommendations to grow your wealth with confidence.
            </Subheading>
            <div className="mb-10 flex justify-center gap-5">
              {" "}
              <Button
                className="h-[42px] w-[115px] lg:h-12 lg:w-[159px]"
                asChild
              >
                <Link className="lg:text-base" href="/login">
                  GET STARTED
                </Link>
              </Button>
              <Button
                variant="outline"
                className="box-border h-[42px] w-[115px] lg:h-12 lg:w-[169px]"
              >
                <Link className="lg:text-base" href="#">
                  CONTACT US
                </Link>
              </Button>
            </div>
          </div>
        </CardWithCandles>
      </div>
      <div className="px-5 pt-[281px] xl:pt-[465px]">
        {" "}
        <DataTable
          className="relative z-10 mx-auto min-h-[179px] max-w-[310px] rounded-[11px] bg-light-gray p-[6px] outline-4 outline-border-gray lg:max-w-[1176px] lg:rounded-[48px] lg:p-9 lg:outline-[14px]"
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
}

export default HeroTable;
