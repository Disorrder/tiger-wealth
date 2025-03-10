import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import BaseCard from "./base-card";
import Heading3 from "./headings/heading-3";
import VikingLogo from "./viking-logo";

function ReportCard() {
  return (
    <Link href="/tiger-stock-report">
      <BaseCard className="w-full max-w-[448px] space-y-4 rounded-2xl lg:p-12">
        <VikingLogo className="lg:h-12 lg:w-[124px]" />
        <Heading3 className="b2-bold">
          Q4 2024: Viking Therapeutics(VKTX) at &51.53 Price Target of $120.00
        </Heading3>
        <p className="b3-regular lg:b2-regular lg:mb-12">
          Viking Therapeutics is a clinical-stage biopharmaceutical company
          focused on developing novel therapies for metabolic and endocrine
          disorders, aiming to improve patient lives through innovative
          treatments.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {" "}
            <Avatar className="mr-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="b2-regular mr-3 font-bold">Danny Aoun</span>
            <span className="b2-regular text-secondary-foreground">
              2024-11-20
            </span>
          </div>
          <ChevronRight />
        </div>
      </BaseCard>
    </Link>
  );
}

export default ReportCard;
