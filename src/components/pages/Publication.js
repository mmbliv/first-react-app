import React from "react";
import { PapersCom } from "../publicationCom/PapersCom";
import { SiGooglescholar } from "react-icons/si";
const Publication = () => {
  return (
    <div className="w-10/12 my-8 mx-auto">
      <h1 className="flex font-bold text-4xl pb-2">
        <p className="pr-6 text-Stroke">PUBLICATION</p>
        <a
          className=" text-Button transform hover:scale-110"
          href="https://scholar.google.com/citations?user=RXLH5k4AAAAJ&hl=en"
        >
          <SiGooglescholar />
        </a>
      </h1>
      <PapersCom />
    </div>
  );
};

export default Publication;
