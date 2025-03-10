import Link from "next/link";
import { Button } from "~/components/ui/button";
import { USER_STATUS } from "~/lib/const";
import UserPreview from "./user-preview";

type AuthWidgetProps = {
  userStatus: string;
};

function AuthWidget({ userStatus }: AuthWidgetProps) {
  return (
    <>
      {userStatus === USER_STATUS.NO_AUTH ? (
        <div className="flex items-center gap-5">
          <Button className="relative mt-auto h-12 w-14 bg-vampire-black">
            <span className="relative z-10 bg-gradient-to-r from-accent to-theme-orange bg-clip-text text-transparent">
              <Link className="b2-bold" href="/login">
                LOGIN
              </Link>
            </span>
          </Button>
          <Button className="w-[112px]" asChild>
            <Link className="b2-bold" href="/sign-up">
              SIGN UP
            </Link>
          </Button>
        </div>
      ) : (
        <UserPreview />
      )}
    </>
  );
}

export default AuthWidget;
