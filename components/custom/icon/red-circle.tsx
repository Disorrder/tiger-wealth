import { cn } from "~/lib/utils";

function RedCircle({ className }: { className?: string | undefined }) {
  return (
    <div
      className={cn(
        "absolute size-[100px] rounded-full bg-paradise-red/40 blur-[69px] lg:size-[402px] lg:blur-[277px]",
        className,
      )}
    />
  );
}

export default RedCircle;
