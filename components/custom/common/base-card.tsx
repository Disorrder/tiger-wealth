import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";

function BaseCard({
  children,
  className,
}: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-light-gray px-6 py-[26px] lg:rounded-[48px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default BaseCard;
