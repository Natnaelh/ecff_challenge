import Image from "next/image";

import Link from "next/link";
import React from "react";

const imageUrl =
  " https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

function AboutUs() {
  return (
    <div
      className="flex mt-22 flex-col mx-auto bg-ecffSecondary space-y-3 md:mx-auto md:justify-center 
    md:items-center md:my-8 md:flex-row md:space-x-32 md:h-128 md:space-y-0"
    >
      <div className=" justify-center items-center md:-mb-48 md:w-1/2">
        <div className="relative pr-2 ml-24 hidden md:block bg-ecffBrown  ">
          <Image
            objectFit="cover"
            alt="Hand of farmers holding cherries coffee bean on hand"
            src={imageUrl}
            width={550}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col justify-self-end items-start px-12 w-1/2 h-full justify-center md:mx-auto">
        <h2 className="text-ecffBrown font-bold text-5xl my-4">About Us</h2>
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

// import Link from "next/link";
// import React from "react";

// function AboutUs() {
//   return (
//     <div className="flex flex-col bg-ecffSecondary space-x-0 space-y-6 md:space-x-6 md:space-y-0 md:flex-row">
//       <div className="border-ecffBrown border-2">
//
//       </div>
//       <div> About Us</div>
//     </div>
//   );
// }

// export default AboutUs;
