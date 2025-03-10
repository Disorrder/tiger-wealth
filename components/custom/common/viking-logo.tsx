import Link from "next/link";
import { cn } from "~/lib/utils";

function VikingLogo({ className }: { className?: string | undefined }) {
  return (
    <Link href="/">
      <img
        className={cn(className)}
        src="/images/viking.svg"
        alt="Viking Therapeutics logo"
      />
    </Link>
  );
}

export default VikingLogo;
