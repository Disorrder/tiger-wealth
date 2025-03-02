import Logo from "~/components/custom/common/logo";

function AuthorizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <header className="container mx-auto py-4">
        <Logo theme="dark" />
      </header>
      <main className="relative flex flex-1 items-center justify-center">
        <img
          className="absolute bottom-0 left-0"
          src="/images/tiger-jump.svg"
          alt="Jumping tiger"
        />
        <div className="-z-10 absolute right-0 size-[337px] translate-y-[35%] rounded-full bg-light-green/40 blur-[227px]" />
        {children}
      </main>
    </div>
  );
}

export default AuthorizationLayout;
