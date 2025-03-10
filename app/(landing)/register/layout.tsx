import Link from "next/link";

function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <div className="-z-10 absolute -right-[20%] size-[100px] translate-y-40 rounded-full bg-light-green/40 blur-[96px]" /> */}
      <div className="-translate-x-1/8 -z-10 absolute left-0 size-[100px] translate-y-118 rounded-full bg-paradise-red/40 blur-[96px]" />
      {children}
      <div className="container mx-auto px-4">
        <h3 className="t2-bold mb-4 text-primary-foreground">
          Important Notes:{" "}
        </h3>
        <p className="b2-regular mb-20 lg:mb-40">
          By clicking SUBMIT you are signing up to the paid subscription to
          Tiger’s Stock Picks and you are agreeing to our{" "}
          <Link href="/terms-of-service" className="text-accent">
            Terms of Service,
          </Link>{" "}
          <Link className="text-accent" href="/terms-and-conditions">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link className="text-accent" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          Sales tax may apply Your subscription will automatically renew at the
          then current price, using the most recent credit card we have on file.
          Subscriptions purchased with Apple Pay will renew using Apple Pay. All
          prices quoted are in U.S. dollars. If there is no refund offer or
          credit transfer offer stated on this order page, none will apply for
          the purchase of this product. To cancel or request changes to your
          subscription please contact us here. Please note that some
          subscriptions can be managed online via your 
          <Link className="text-accent" href="/my-accounts">
            My Accounts
          </Link>{" "}
          page. Your order information is securely encrypted.{" "}
          <Link className="text-accent" href="/my-accounts">
            Need assistance? Call us at (917) 991-7474.
          </Link>{" "}
          Tiger Wealth Capital respects your privacy and strive to be
          transparent about our data collection practices. We use your
          information to customize the site for you, to contact you about your
          membership, provide you with promotional information, and in aggregate
          to help us better understand how the service is used. For more
          details, please review our {" "}
          <Link className="text-accent" href="/privacy-policy">
            Privacy Policy.
          </Link>{" "}
          *Based on $199/year list price. Introductory promotion for new members
          only. Returns updated during market hours unless specified. Danny Aoun
          owns shares in all current and past stocks recommended. Read our
          disclosure policy for more details. Problems Ordering? Email us at {" "}
          <Link className="text-accent" href="/">
            tiger@tigerwealthcapital.com
          </Link>{" "}
          , or call (917) 991-7474 9:30am-4pm ET, Monday through Friday.{" "}
          <Link className="text-accent" href="/contact-us">
            Contact Us.
          </Link>{" "}
          ©2024 Tiger Wealth Capital. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default RegisterLayout;
