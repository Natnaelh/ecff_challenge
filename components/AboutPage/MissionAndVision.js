import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function MissionAndVision() {
  return (
    <div className="w-full h-screen publications-reports-one bg-cover bg-center flex flex-col justify-center md:space-x-8 items-center md:flex-row mx-auto mb-24 pb-10 ">
      <div className="md:w-1/3 md:h-72 text-white flex flex-col justify-center items-center border-4 p-8 space-y-4 backdrop-opacity-1 backdrop-invert bg-white/10">
        <h1 className="font-bold text-4xl md:text-3xl text-center">Mission</h1>
        <p className="text-lg md:text-sm text-ecffSecondary w-full h-full text-center">
          To reverse degradation of natural environment, and support societies
          and government to build a future in which humans live in harmony with
          nature, by conservation biodiversity, promoting sustainable and
          equitable use of renewable natural resources.
        </p>
      </div>

      <div className="md:w-1/3 md:h-72 md:mt-32 text-white flex flex-col justify-center items-center border-4 p-8 space-y-4 backdrop-opacity-1 backdrop-invert bg-white/10">
        <h1 className="font-bold text-4xl md:text-3xl text-center">Vision</h1>
        <p className="text-lg md:text-sm text-ecffSecondary w-full h-full text-center ">
          A healthy and prosperous society that values, conserves and
          sustainably uses nature.
        </p>
      </div>
    </div>
  );
}
