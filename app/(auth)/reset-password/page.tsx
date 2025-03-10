import Link from "next/link";
import BaseCard from "~/components/custom/common/base-card";
import Heading2 from "~/components/custom/common/headings/heading-2";
import Subheading2 from "~/components/custom/common/headings/subheading-2";
import { Button } from "~/components/ui/button";

function ResetPassword() {
  return (
    <BaseCard className="px-4 py-6 lg:w-[572px] lg:p-12">
      <Heading2>Reset Password</Heading2>
      <Subheading2 className="mb-6 max-w-[290px] lg:mb-12 lg:max-w-full">
        We’ve sent you an email with a link to reset your password.
      </Subheading2>
      <img
        className="mx-auto mb-6 size-[100px] lg:mb-12 lg:size-40"
        src="/icons/mail-sent.svg"
        alt="Email sent"
      />
      <div className="flex items-baseline justify-center">
        <span className="b3-regular lg:b2-regular mr-2">
          Didn’t receive the email?
        </span>
        <Button className="relative bg-none p-0">
          <span className="relative z-10 bg-gradient-to-r from-accent to-theme-orange bg-clip-text text-transparent">
            <Link className="b2-bold" href="/password-changed">
              Resend
            </Link>
          </span>
        </Button>
      </div>
    </BaseCard>
  );
}

export default ResetPassword;
