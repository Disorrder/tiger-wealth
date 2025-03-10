import { cn } from "~/lib/utils";

function Heading2({
  children,
  className,
}: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <h2
      className={cn(
        "b1-bold xl:t1-bold mb-2 text-primary-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default Heading2;
