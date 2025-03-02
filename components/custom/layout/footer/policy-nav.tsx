import Link from "next/link";
import { POLICY_NAV_LIST } from "~/lib/const";

function PolicyNav() {
  return (
    <nav className="mb-10 lg:mb-12">
      <ul className="b2-regular space-y-4 text-footer-foreground lg:flex lg:items-baseline lg:justify-between lg:gap-11">
        {POLICY_NAV_LIST.map((item) => (
          <li
            className="underline decoration-1 decoration-accent underline-offset-4"
            key={item.href}
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PolicyNav;
