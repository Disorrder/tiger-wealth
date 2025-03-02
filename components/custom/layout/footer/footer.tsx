import Link from "next/link";
import { FOOTER_NAV_ITEMS } from "~/lib/const";
import Logo from "../../common/logo";
import MediaList from "./media-list";
import PolicyNav from "./policy-nav";

function Footer() {
  return (
    <div className="bg-vampire-black">
      {" "}
      <div className="container mx-auto bg-vampire-black px-4 pt-8 pb-4 text-primary-foreground lg:pt-[49px]">
        <div className="grid grid-cols-1 lg:mb-12 lg:grid-cols-[57%_43%] lg:gap-y-12">
          <Logo
            className="mb-8 h-8 w-[184px] lg:h-16 lg:w-[367px]"
            theme="dark"
          />
          <nav className="order-2 mb-[42px]">
            <ul className="lg:b2-regular lg: justify-between font-['PT_Serif'] text-[14px] lg:flex lg:items-center lg:gap-2">
              {FOOTER_NAV_ITEMS.map((navItem) => (
                <li key={navItem.text}>
                  <Link
                    className="block px-0 py-2 lg:px-4 lg:py-4"
                    href={navItem.path}
                  >
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <article className="order-1 mb-4 lg:order-3 lg:mb-6">
            <h2 className="b2-bold lg:t2-bold mb-2">About Us</h2>
            <p className="b3-regular lg:b2-regular text-secondary-foreground">
              Your premier destination for savvy tech and biotech investments!
              Founded by industry expert Danny Aoun. Tiger Wealth Capital stands
              out by investing in the stocks recommended. Our commitment to
              transparency, integrity, and hands-on-investing ensures a shared
              journey to financial success.
            </p>
          </article>
          <MediaList className="order-3 mb-10 lg:ml-auto lg:items-center" />
        </div>
        <PolicyNav />
        <span className="b3-regular lg:b2-regular w-full text-center text-secondary-foreground lg:text-left">
          &copy; Tiger Wealth Capital 2024
        </span>
      </div>
    </div>
  );
}

export default Footer;
