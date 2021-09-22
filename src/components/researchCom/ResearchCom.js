import React from "react";
import Sidebar from "../DropdownMenue";

import Research from "./Research";
// import { News } from "../newsCom/News";

export const ResearchCom = () => {
  return (
    <div>
      <ol className=" bg-Secondary bg-opacity-20 text-Headline p-4 shadow-inner hidden sm:inline sm:fixed sm:w-1/5 sm:mt-12">
        <Sidebar ResearchTag={"RESEARCH"} />
      </ol>
      <div className="mt-5 sm:relative sm:left-1/4 sm:w-9/12">
        <Research />
      </div>
    </div>
  );
};
