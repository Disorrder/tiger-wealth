"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { userStatus } from "~/lib/mock";
import Logo from "../../common/logo";
import AuthWidget from "./auth-widget";
import HeaderNav from "./header-nav";

function Header() {
  return (
    <div className="bg-header-background">
      {" "}
      <header className="container mx-auto flex h-[50px] w-full items-center justify-between px-4 xl:h-24 xl:max-w-[1440px]">
        <Sheet>
          <SheetTrigger>
            <Menu style={{ width: "24px", height: "24px" }} />
          </SheetTrigger>
          <SheetContent className="p-4" side="left">
            <SheetTitle className="sr-only">
              Navigation menu of mobile version
            </SheetTitle>
            <nav className="b2-mobile-regular space-y-4">
              <Link className="block" href="/">
                Why Tiger Stocks
              </Link>
              <Separator className="bg-secondary-foreground/20" />
              <Link className="block" href="/">
                Personal Finance
              </Link>
              <Separator className="bg-secondary-foreground/20" />
              <Link className="block" href="/">
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Logo className="h-6 w-[138px] xl:h-16 xl:w-[367px]" theme="dark" />
        <div className="hidden items-center xl:flex">
          <HeaderNav />
          <AuthWidget userStatus={userStatus} />
        </div>
        <div className="xl:hidden" />
      </header>
    </div>
  );
}

export default Header;
