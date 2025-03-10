import { cn } from "~/lib/utils";

function Heading3({
  children,
  className,
}: { children: React.ReactNode; className?: string | undefined }) {
  return (
    <h1 className={cn("b2-bold xl:t2-bold mb-4 inline text-accent", className)}>
      {children}
    </h1>
  );
}

export default Heading3;
