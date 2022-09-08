import React from "react";
import Image from "next/image";

export default function AboutECFF({ Aboutdata }) {
  console.log(Aboutdata);
  const SVGIMAGE = [
    { path: "/icons/Vector (1).svg" },
    { path: "/icons/Vector.svg" },
    { path: "/icons/Vector (2).svg" },
    { path: "/icons/Vector (3).svg" },
  ];
  return (
    <div className="flex md:flex-col my-12 flex-col-reverse">
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 mb-12 px-12 ">
        {/* <div className=""> */}
        <div className="flex flex-col justify-center  text-left w-full">
          <h1 className="text-ecffBrown font-bold text-4xl md:text-5xl  text-left my-4">
            We are ECFF
          </h1>
          <p className="text-textblack text-left md:text-sm my-2 w-full">
            Environment and Coffee Forest Forum (ECFF) is a local civil society
            organization registered and licensed in Ethiopia (Registration
            Number 0378) and focuses on developing strategies for sustainable
            use and conservation of the environment in general and the Coffee
            forests in particular, through thematic research on conservation
            planning education and pilot implementation of research finding.
          </p>
          <p className="text-textblack text-left md:text-sm my-2 w-full">
            ECFF provides services including conservation planning practical
            implementation specifically proven concepts, environmental education
            and capacity building and climate change mitigation.
          </p>
        </div>

        <div className="hidden md:flex md:flex-col md:w-full md:my-12 md:items-center md:place-items-start">
          <div className="md:justify-self-start md:place-self-start">
            <Image
              src="https://images.unsplash.com/photo-1597816760638-406d7271105c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>

          <div className="md:-mt-12 md:place-self-end">
            <Image
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              width={250}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="flex md:flex-row flex-col md:justify-between space-x-0 space-y-2 flex-wrap mx-24">
        {Aboutdata.map((item, index) => (
          <div key={index} className="flex">
            <Image
              src={SVGIMAGE[index].path}
              width={30}
              height={30}
              alt=""
              className=""
            />
            <div className="ml-2 flex flex-col">
              <h1 className="text-2xl font-bold">
                {index === 3 ? `$${item.count}` : item.count}
              </h1>
              <p className="text-base">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
