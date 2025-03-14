import { cn } from "~/lib/utils";

function BaseCard({
  children,
  className,
}: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-light-gray p-4 lg:rounded-[48px] lg:p-0 lg:px-6 lg:py-[26px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default BaseCard;
