import React from "react";
import { News } from "../newsCom/News";

const NewsPage = () => {
  return (
    <div className="w-10/12 my-0 mx-auto ">
      <div className="w-full pt-4 text-gray-700">
        <News />
      </div>
    </div>
  );
};

export default NewsPage;
