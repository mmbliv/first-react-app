import React from "react";
import { PapersCom } from "../publicationCom/PapersCom";
import { SiGooglescholar } from "react-icons/si";
import { Text } from "../../constainers/Languages";
const Publication = () => {
  return (
    <div className=" w-10/12 h-screen sm:w-10/12 my-8 mx-auto">
      <h1 className="flex font-bold text-4xl pb-2">
        <p className="pr-6 text-Stroke">
          <Text tid="navpublication" />
        </p>
        <div className=" text-Button transform hover:scale-110">
          <SiGooglescholar />
        </div>
      </h1>
      <PapersCom />
    </div>
  );
};

export default Publication;
