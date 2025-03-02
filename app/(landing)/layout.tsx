import Footer from "~/components/custom/layout/footer/footer";
import Header from "~/components/custom/layout/header/header";

function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden h-11 bg-amber-300" />
      <Header />
      <main className="pt-6 lg:pt-12">{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
