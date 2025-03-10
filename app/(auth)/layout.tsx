import Image from "next/image";
import Logo from "~/components/custom/common/logo";

function AuthorizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="container mx-auto p-4">
        <Logo className="h-6 w-[138px] lg:h-[54px] lg:w-[367px]" theme="dark" />
      </header>
      <div className="relative h-full">
        {" "}
        <main className="flex h-full flex-1 items-center justify-center px-8 pt-[30px] pb-32 lg:pb-0">
          <div className="-z-10 -translate-y-1/4 absolute top-0 right-0 size-[100px] translate-x-1/3 rounded-full bg-light-green/40 blur-[69px] lg:size-[337px] lg:translate-x-1/8 lg:translate-y-1/6 lg:blur-[277px]" />
          <div className="-z-10 -translate-y-30 lg:-translate-x-1/10 absolute bottom-0 left-0 size-[100px] rounded-full bg-paradise-red/40 blur-[69px] lg:size-[308px] lg:translate-y-1/10 lg:blur-[277px]" />
          <div className="-left-[100px] lg:-left-[60px] absolute bottom-0 h-[180px] w-[390px] lg:h-[250px] lg:w-[472px]">
            <Image
              className="h-full w-full object-contain"
              src="/images/tiger-jump.svg"
              alt="Jumping tiger"
              width={472}
              height={302}
            />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export default AuthorizationLayout;
