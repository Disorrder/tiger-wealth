import Link from "next/link";
import { Card } from "~/components/ui/card";
import CardWithGradient from "./card-with-gradient";

function ArticleCard() {
  return (
    <CardWithGradient className="h-[391px] w-[358px] lg:h-[500px] lg:w-[448px]">
      <Card>
        <div className="flex h-full flex-col items-center justify-between">
          <div className="mx-auto mb-4 w-full">
            <img
              className=" rounded-[24px]"
              src="/images/mock/article.png"
              alt="Happy rich men"
            />
          </div>
          <h2 className="b2-bold lg:t2-bold w-80 lg:w-full">
            Your Go-To Source for the Latest Investing Insights!
          </h2>
          <div className="flex w-full items-center justify-between">
            <span className="b2-regular block text-secondary-foreground">
              Dec 23, 2024
            </span>
            <Link className="block" href="#">
              <img
                src="/icons/right.svg"
                className="w-10"
                alt="Open article arrow"
              />
            </Link>
          </div>
        </div>
      </Card>
    </CardWithGradient>
  );
}

export default ArticleCard;
