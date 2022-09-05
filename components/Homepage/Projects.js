import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <>
      <div className="flex md:flex-row flex-col text-white  mx-auto justify-center space-x-8 -mt-12 h-72 my-32">
        <div className="project-one-background bg-center bg-cover flex flex-col place-items-center text-center justify-end border-ecffSecondary border-8 md:w-72 md:h-96 pb-6">
          <h3 className="text-lg font-bold">Project 2</h3>
          <p className="text-sm text-white">
            lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <Link href="/">
            <a>
              <h5 className="border text-white hover:font-bold">Read More</h5>
            </a>
          </Link>
        </div>
        <div className="project-two-background bg-center bg-cover flex flex-col place-items-center text-center justify-end border-ecffSecondary border-8 md:w-72 md:h-96 pb-6">
          <h3 className="text-lg font-bold">Project 2</h3>
          <p className="text-sm text-white">
            lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <Link href="/">
            <a>
              <h5 className="border text-white hover:font-bold">Read More</h5>
            </a>
          </Link>
        </div>
        <div className="project-three-background bg-center bg-cover flex flex-col place-items-center text-center justify-end border-ecffSecondary border-8 md:w-72 md:h-96 pb-6">
          <h3 className="text-lg font-bold">Project 2</h3>
          <p className="text-sm text-white">
            lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <Link href="/">
            <a>
              <h5 className="border text-white hover:font-bold text-sans">
                Read More
              </h5>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
