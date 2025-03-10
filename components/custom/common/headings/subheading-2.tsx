import { cn } from "~/lib/utils";

type Subheading2Props = {
  children: React.ReactNode;
  className?: string | undefined;
};

function Subheading2({ children, className }: Subheading2Props) {
  return (
    <h2
      className={cn(
        "b3-regular xl:b2-regular mb-8 text-secondary-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default Subheading2;
