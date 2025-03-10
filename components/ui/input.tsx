import type * as React from "react";

import { cn } from "~/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "b3-regular lg:b2-regular placeholder:b3-regular placeholder:lg:b2-regular flex h-[42px] w-full min-w-0 rounded-[8px] bg-dark-gray px-4 py-3 text-secondary-foreground outline-none transition-[color,box-shadow] selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-secondary-foreground autofill:bg-dark-gray focus:bg-dark-gray disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:px-6",

        "focus-visible:bg-dark-gray",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
