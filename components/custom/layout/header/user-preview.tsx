import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { DROPDOWN_MENU_ITEMS } from "~/lib/const";

function UserPreview() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ChevronDown className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-vampire-black p-8">
          <ul className="b2-regular space-y-6 text-primary-foreground">
            {DROPDOWN_MENU_ITEMS.map((item) => (
              <DropdownMenuItem key={item.alt}>
                <Link href="#">
                  <li className="flex items-center justify-start gap-2">
                    <img src={item.iconPath} alt={item.alt} />
                    {item.text}
                  </li>
                </Link>
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserPreview;
