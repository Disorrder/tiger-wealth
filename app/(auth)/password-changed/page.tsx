import Link from "next/link";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/headings/heading-2";
import Subheading2 from "~/components/custom/common/headings/subheading-2";
import { Button } from "~/components/ui/button";

function PasswordChanged() {
  return (
    <BaseCard className="px-4 py-6 text-center lg:w-[572px] lg:px-12 lg:py-20">
      <img
        className="mx-auto mb-4 w-[116px] lg:mb-12 lg:w-[186px]"
        src="/icons/password-done.svg"
        alt="Password changed"
      />
      <Heading2 className="b1-bold lg:t2-bold ">Password changed!</Heading2>
      <Subheading2 className="mb-6 lg:mb-12">
        Your password has been changed successfully.
      </Subheading2>
      <Button className="w-full" asChild>
        <Link href="/login">LOGIN</Link>
      </Button>
    </BaseCard>
  );
}

export default PasswordChanged;
