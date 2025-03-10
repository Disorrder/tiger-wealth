import { cn } from "~/lib/utils";

function GreenCircle({ className }: { className?: string | undefined }) {
  return (
    <div
      className={cn(
        "absolute size-[100px] rounded-full bg-light-green/40 blur-[69px] lg:size-[402px] lg:blur-[277px]",
        className,
      )}
    />
  );
}

export default GreenCircle;
