import Link from "next/link";
import { cn } from "~/lib/utils";

type LogoProps = {
  theme: string;
  className?: string | undefined;
};

function Logo({ theme, className }: LogoProps) {
  return (
    <Link href="/">
      <img
        className={cn(className)}
        src={
          theme === "light" ? "/logo/header-logo.svg" : "/logo/logo-dark.svg"
        }
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
