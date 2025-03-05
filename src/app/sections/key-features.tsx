import type React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import FeatureCard from "@/components/key-features-card";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function FeaturesSection() {
  return (
    <section
      className={clsx(
        "w-full py-16 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden",
        nunito.variable
      )}
    >
      {/* Background wave pattern */}
      <div className="absolute inset-0 z-20 ">
        <Image
          src="/waves-svg.svg"
          alt="Background pattern"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>

      <div className="max-w-7xl mx-auto  relative">
        <div className="w-fit mx-auto flex flex-col">
          <div className="inline-block bg-[#eaf1fb] self-center text-[#458de1] px-6 py-2 rounded-2xl mb-6 font-semibold relative z-20">
            FROM IDEA TO RESULT IN MINUTES
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#520052] mb-12 relative z-20">
            Key Features Adgen-ai offers
          </h2>
        </div>

        <FeatureCard />
      </div>
    </section>
  );
}
