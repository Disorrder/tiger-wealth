import { cn } from "~/lib/utils";

type Title2Props = {
  children: React.ReactNode;
  className?: string | undefined;
};

function Title2({ children, className }: Title2Props) {
  return (
    <h1 className={cn("t2-bold mb-4 text-primary-foreground", className)}>
      {children}
    </h1>
  );
}

export default Title2;
