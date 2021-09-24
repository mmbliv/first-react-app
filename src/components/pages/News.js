import React from "react";
import { News } from "../newsCom/News";

const NewsPage = () => {
  return (
    <div className=" w-4/6 my-0 mx-auto h-screen">
      <div className="pt-4 text-gray-700">
        <News />
      </div>
    </div>
  );
};

export default NewsPage;
