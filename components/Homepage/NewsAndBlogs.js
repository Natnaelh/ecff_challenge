import Image from "next/image";
import React from "react";

const NewsAndBlogsArray = [
  {
    title: "News and Blogs",
    photo: "/images/crcoffee.jpg",
  },
  {
    title: "News and Blogs",
    photo: "/images/crcoffee.jpg",
  },
  {
    title: "News and Blogs",
    photo: "/images/crcoffee.jpg",
  },
  {
    title: "News and Blogs",
    photo: "/images/crcoffee.jpg",
  },
  {
    title: "Lorem Ipsum and Lorem Ipsum Lorem Ipsum and Lorem Ipsum",
    photo: "/images/crcoffee.jpg",
  },
  {
    title: "News and Blogs",
    photo: "/images/crcoffee.jpg",
  },
];

function NewsAndBlogs({ newsAndBlogs }) {
  console.log(newsAndBlogs);
  return (
    <div className="text-center md:h-screen  h-screen mb-32 md:mb-64">
      <h2 className="text-black font-bold text-md md:text-md my-1">
        STAY INFORMED
      </h2>
      <h2 className="text-ecffBrown font-bold text-2xl md:text-5xl my-4">
        News And Blogs
      </h2>
      <div className="flex flex-row md:flex-wrap sm:flex-nowrap px-24 space-x-2 space-y-0 md:space-x-2 md:space-y-0 justify-evenly items-center">
        {NewsAndBlogsArray.map((newsAndBlogs, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:h-full h-32 lg:w-1/4 sm:w-1/2 md:1/3 p-4 space-y-2 text-center"
            >
              <Image
                src={newsAndBlogs.photo}
                width={500}
                height={500}
                objectFit="cover"
              />
              <p className="text-black text-sm h-4">{newsAndBlogs.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsAndBlogs;
