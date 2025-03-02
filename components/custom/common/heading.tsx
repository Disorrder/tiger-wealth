import { cn } from "~/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "b1-bold xl:h2-bold mx-auto mb-4 text-center text-primary-foreground xl:mb-5",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default Heading;
