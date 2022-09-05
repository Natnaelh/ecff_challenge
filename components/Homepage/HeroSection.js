import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="flex justify-end place-items-center mx-auto h-screen bg-scroll bg-cover hero-background">
      <div className="flex flex-col p-5 text-white mt-4 text-right">
        <h3 className="text-white text-right font-bold text-2xl">
          Sustainability is Our Core Principle
        </h3>
        <p className="text-white tex-center">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. lorem ipsum dolor sit amet.
        </p>
        <Link href="/">
          <a>
            <h3 className="text-white text-right hover:text-yellow-600 inline font-serif font-bold text-lg underline">
              Learn More
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
