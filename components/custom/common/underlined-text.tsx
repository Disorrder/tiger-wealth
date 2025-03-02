type UnderlinedTextProps = {
  children: React.ReactNode;
};

function UnderlinedText({ children }: UnderlinedTextProps) {
  return (
    <span className="underline decoration-accent underline-offset-[3px]">
      {children}
    </span>
  );
}

export default UnderlinedText;
