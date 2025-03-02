import { cn } from "~/lib/utils";

type CardWithCandlesProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

function CardWithCandles({ children, className }: CardWithCandlesProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex justify-center overflow-hidden rounded-[12px] bg-vampire-black lg:rounded-[48px]",
        className,
      )}
    >
      <div className="-translate-y-[60%] absolute right-0 size-[100px] translate-x-[15%] rounded-full bg-light-green/40 blur-3xl lg:size-[402px] lg:blur-[277px]" />
      <div className="-translate-x-1/3 absolute bottom-0 left-0 size-[100px] translate-y-1/3 rounded-full bg-paradise-red/40 blur-3xl lg:size-[402px] lg:blur-[277px]" />
      <img
        className="absolute top-[-89px] right-[-101px] h-[456px] min-w-[596px] lg:top-[11px] lg:right-[-294px] lg:h-[900px] lg:min-w-[2041px]"
        src="/images/candles.svg"
        alt="Candles"
      />
      {children}
    </div>
  );
}

export default CardWithCandles;
