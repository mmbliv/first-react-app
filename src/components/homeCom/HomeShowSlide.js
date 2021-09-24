import React from "react";
import { Text } from "../../constainers/Languages";

const HomeShowSlide = ({ item, total, nextSlide, prevSlide }) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={item.img}
        alt={item.intro}
        className=" w-full h-96 object-cover ms:object-contain"
      />

      <div className="absolute w-6/12 rounded-sm bg-opacity-75 p-2 left-1 top-16 bg-blue-300">
        <p>
          <Text tid={item.intro} />
        </p>
      </div>
      <div className="absolute text-Stroke top-2 left-2 p-1">
        {item.id + "/" + total}
      </div>
    </div>
  );
};

export default HomeShowSlide;
