import Footer from "~/components/custom/layout/footer/footer";
import Header from "~/components/custom/layout/header/header";

function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
