import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="DPNX! Event Solution"
      width={1025}
      height={474}
      priority
      unoptimized
      className={className}
    />
  );
}
