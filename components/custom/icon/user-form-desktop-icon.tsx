import { cn } from "~/lib/utils";

function UserFormDesktopIcon({
  className,
  fill,
}: { className?: string | undefined; fill?: string | null }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      className={cn(className)}
    >
      <g clipPath="url(#clip0_2868_51411)">
        <rect
          x="2.34766"
          y="5.20508"
          width="9.36"
          height="13.92"
          transform="rotate(2.55975 2.34766 5.20508)"
          fill="#1F201F"
        />
        <path
          d="M8.64852 2.39037C6.54383 2.456 4.96414 2.5685 4.28914 2.69975C2.45164 3.056 0.886016 4.53725 0.403203 6.37944C0.337578 6.62319 0.229766 7.2935 0.159453 7.87475C0.0422656 8.8685 0.0328906 9.07944 0.0141406 11.4372C7.81235e-05 13.0169 0.00945312 14.2263 0.0422656 14.7185C0.126641 15.9279 0.276641 17.1372 0.403203 17.6201C0.886016 19.4622 2.44227 20.9341 4.28914 21.2997C6.67039 21.7638 17.6204 21.7544 19.7813 21.2857C21.6188 20.8826 23.1188 19.4435 23.597 17.6201C23.7235 17.1372 23.8735 15.9279 23.9579 14.7185C23.9907 14.2263 24.0001 13.0169 23.986 11.4372C23.9673 9.07944 23.9579 8.8685 23.8407 7.87475C23.7704 7.2935 23.6626 6.62319 23.597 6.37944C23.1188 4.55131 21.6235 3.12162 19.7766 2.71381C19.3266 2.61537 18.1266 2.51225 16.5938 2.43725C15.2438 2.37162 10.172 2.3435 8.64852 2.39037ZM7.50008 6.54819C8.89227 6.99819 9.68445 8.54506 9.22508 9.91381C8.92977 10.8091 8.17508 11.5076 7.2657 11.7232C6.12664 11.9951 4.84695 11.4091 4.29383 10.3638C4.07352 9.94194 3.98445 9.581 3.98445 9.10287C3.98445 8.24975 4.3407 7.50912 5.00164 6.98412C5.7282 6.41225 6.60945 6.25756 7.50008 6.54819ZM20.8032 9.26225C21.1173 9.3935 21.3657 9.70287 21.4454 10.0638C21.5204 10.4294 21.2485 10.9122 20.8501 11.1138C20.6813 11.1982 20.536 11.2029 17.297 11.2029C14.3485 11.2029 13.8985 11.1935 13.7438 11.1279C12.9423 10.7951 12.9141 9.67475 13.7016 9.28569C13.8985 9.18725 13.936 9.18725 17.2641 9.18725C20.1985 9.18725 20.6485 9.19662 20.8032 9.26225ZM9.29539 12.5622C9.7782 12.5951 9.95164 12.6279 10.1579 12.7263C10.5048 12.881 10.7438 13.0779 10.9126 13.3497C11.1423 13.7013 11.2032 14.0247 11.2032 14.8826C11.2032 15.7122 11.147 16.0263 10.936 16.4201C10.772 16.7154 10.3595 17.0951 10.0407 17.2357C9.32821 17.5497 6.7407 17.6904 4.92664 17.5122C3.61414 17.381 3.22977 17.2591 2.80789 16.8232C2.36727 16.3685 2.20789 15.8482 2.2032 14.8591C2.2032 13.8935 2.34852 13.4435 2.78914 13.0357C3.1407 12.7169 3.45008 12.6091 4.12508 12.5622C4.91727 12.5107 8.60164 12.5107 9.29539 12.5622ZM17.8548 12.956C18.0751 13.1107 18.2579 13.3919 18.3048 13.6497C18.3798 14.0576 18.0798 14.5638 17.6626 14.7419C17.4001 14.8497 14.0063 14.8497 13.7438 14.7419C13.322 14.5638 13.036 14.0857 13.1016 13.6638C13.1438 13.3732 13.3829 13.0357 13.6407 12.9044L13.847 12.7919L15.7548 12.806L17.6579 12.8201L17.8548 12.956Z"
          fill={fill || "var(--accent)"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_51411">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default UserFormDesktopIcon;
