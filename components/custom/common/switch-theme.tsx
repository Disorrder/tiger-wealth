"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { cn } from "~/lib/utils";

const SwitchTheme = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex translate-x-10 items-center">
      <SwitchPrimitives.Root
        className={cn(
          "peer relative inline-flex h-[26px] w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=unchecked]:bg-white",
          className
        )}
        ref={ref}
        onCheckedChange={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        {...props}
      >
        <Moon className="absolute left-[5px] z-10 h-[14px] w-[14px] text-white" />
        <Sun className="absolute right-[5px] z-10 h-[14px] w-[14px]" />
        <div className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[hsl(var(--button-background-from))] to-[hsl(var(--button-background-to))] p-[1px] dark:bg-none dark:bg-secondary-foreground">
          <div className="flex h-full w-full items-center rounded-full bg-white dark:bg-dark-gray" />
        </div>
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none z-20 block h-6 w-6 rounded-full bg-gradient-to-r from-[hsl(var(--button-background-from))] to-[hsl(var(--button-background-to))] ring-0 transition-transform duration-300 data-[state=checked]:translate-x-[23px] data-[state=unchecked]:translate-x-0 ",
          )}
        />
      </SwitchPrimitives.Root>
    </div>
  );
});
SwitchTheme.displayName = SwitchPrimitives.Root.displayName;

export { SwitchTheme };
