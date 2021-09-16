import React, { useState } from "react";

const HomeShowSlide = ({ item, total, nextSlide, prevSlide }) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={item.img}
        alt={item.intro}
        className=" w-full h-96 object-cover"
      />

      <div className="absolute rounded-sm bg-opacity-75 p-2 left-1 top-16 bg-blue-300">
        <p>{item.intro}</p>
      </div>
      <div className="absolute text-white top-2 left-2 p-1">
        {item.id + "/" + total}
      </div>
    </div>
  );
};

export default HomeShowSlide;
