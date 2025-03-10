import { cn } from "~/lib/utils";

type SubheadingProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

function Subheading({ children, className }: SubheadingProps) {
  return (
    <p
      className={cn(
        "b3-regular xl:b1-regular mb-4 text-center text-traffic-white xl:mb-12",
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Subheading;
