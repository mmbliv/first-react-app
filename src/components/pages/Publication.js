import React from "react";
import { PapersCom } from "../publicationCom/PapersCom";
const Publication = () => {
  return (
    <div className="w-10/12 my-8 mx-auto ">
      <h1 className="font-bold text-4xl font-serif text-gray-700 pb-2">
        PUBLICATION
      </h1>
      <PapersCom />
    </div>
  );
};

export default Publication;
