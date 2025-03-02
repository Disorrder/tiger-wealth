import Link from "next/link";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/heading-2";
import Subheading2 from "~/components/custom/common/subheading-2";
import { Button } from "~/components/ui/button";

function PasswordChanged() {
  return (
    <BaseCard className="w-[572px] px-12 py-20 text-center">
      <img
        className="mx-auto mb-12"
        src="/icons/password-done.svg"
        alt="Password changed"
      />
      <Heading2 className="t2-bold ">Password changed!</Heading2>
      <Subheading2 className="mb-12">
        Your password has been changed successfully.
      </Subheading2>
      <Button className="w-full" asChild>
        <Link className="text-base" href="/login">
          LOGIN
        </Link>
      </Button>
    </BaseCard>
  );
}

export default PasswordChanged;
