// components/Hero.js
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-blue-900 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.svg"
          alt="Young people supporting each other"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      {children}
    </div>
  );
}
