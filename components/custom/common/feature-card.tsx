import { Card } from "~/components/ui/card";
import type { FeatureCardData } from "~/lib/types";
import { cn } from "~/lib/utils";

type FeatureCardProps = {
  featureCardData: FeatureCardData;
  className?: string | undefined;
  index: number;
};

function FeatureCard({ featureCardData, index }: FeatureCardProps) {
  return (
    <>
      {" "}
      <Card
        className={cn(
          index % 2 !== 0 ? "bg-light-gray" : "bg-vampire-black",
          "flex h-[292px] w-[358px] items-center rounded-[30px] border-none lg:h-[480px] lg:w-[448px] lg:rounded-[48px]",
        )}
      >
        <div className="h-full px-4 py-6">
          <div
            className={cn(
              "mb-4 flex size-12 items-center justify-center rounded-full lg:mb-7 lg:size-16",
              index % 2 !== 0 ? "bg-vampire-black" : "bg-light-gray",
            )}
          >
            <div className="size-6 text-accent lg:size-8">
              {featureCardData.icon}
            </div>
          </div>
          <h2 className="b2-bold lg:t2-bold mb-6 lg:mb-12">
            {featureCardData.title}
          </h2>
          <div className="b3-regular lg:b1-regular text-secondary-foreground">
            {featureCardData.text.split(".").map(
              (sentence) =>
                sentence.trim() && (
                  <p className="mb-3 lg:mb-4" key={sentence}>
                    {sentence.trim()}.
                  </p>
                ),
            )}
          </div>
        </div>
      </Card>
    </>
  );
}

export default FeatureCard;
