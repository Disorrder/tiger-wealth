import { cn } from "~/lib/utils";

function CardWithGradient({
  children,
  className,
}: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <div
      className={cn(
        "rounded-[30px] bg-gradient-to-b from-light-gray p-4 lg:rounded-[48px] lg:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default CardWithGradient;
