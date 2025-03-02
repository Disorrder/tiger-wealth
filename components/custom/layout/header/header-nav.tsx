import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "~/lib/const";

function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="mr-5">
      <ul className="b2-regular mr-2 flex items-center gap-[16px]">
        {NAV_ITEMS.map((navItem) => (
          <li key={navItem.text}>
            <Link className="block px-4 py-4" href={navItem.path}>
              <div className="relative">
                <span
                  className={`${pathname === navItem.path ? "after:-bottom-[34px] font-bold after:absolute after:left-0 after:h-[3px] after:w-full after:bg-accent after:content-['']" : ""}`}
                >
                  {navItem.text}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
