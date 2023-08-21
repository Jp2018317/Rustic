import Image from "next/image";
import Logo from "@/public/Images/Logo/RusticLogo.webp";

export default function Loading() {
  return (
    <div className="mt-[90px] absolute bg-white z-[998] w-full dark:bg-zinc-900">
      <div className="flex h-[calc(100svh-6rem)] items-center justify-center">
        <Image src={Logo} alt="Rustic Logo" className="w-96 h-96" />
      </div>
    </div>
  );
}
