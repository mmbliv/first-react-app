import React from "react";
import { News } from "../newsCom/News";

const NewsPage = () => {
  return (
    <div className="w-10/12 my-0 mx-auto ">
      <div className="w-2/3 border-b-2 border-gray-900 py-4">
        <News />
      </div>
    </div>
  );
};

export default NewsPage;
