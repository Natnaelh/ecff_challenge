import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <div
      className="flex flex-col bg-ecffSecondary space-y-3 mx-auto md:justify-around 
    md:items-center md:my-8 md:flex-row md:space-x-6 md:h-96 md:space-y-0"
    >
      <div className="flex justify-center items-center border-ecffBrown ">
        <div className="hidden md:display w-32 h-72 project-one-background bg-cover bg-center"></div>
      </div>

      <div className=" flex flex-col justify-self-end items-start w-96 h-72 justify-center mx-auto">
        <h2 className="text-ecffBrown font-bold text-4xl my-4">About Us</h2>
        <p className="text-textblack text-left my-2">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="/about">
          <a>
            <h4 className="underline text-ecffBrown font-bold text-lg font-sans">
              LEARN MORE
            </h4>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
