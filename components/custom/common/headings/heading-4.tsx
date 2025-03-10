import { cn } from "~/lib/utils";

function Heading4({
  children,
  className,
}: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <h1
      className={cn(
        "b2-mobile-regular xl:b1-regular mb-4 font-bold text-primary-foreground",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default Heading4;
