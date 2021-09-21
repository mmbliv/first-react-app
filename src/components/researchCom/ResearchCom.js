import React from "react";
import Sidebar from "../DropdownMenue";

import Research from "./Research";
// import { News } from "../newsCom/News";

export const ResearchCom = () => {
  return (
    <div>
      <div className=" hidden sm:inline sm:fixed sm:w-1/5 sm:pt-32">
        <Sidebar ResearchTag={"RESEARCH"} />
      </div>
      <div className="sm:relative sm:left-1/4 sm:w-9/12 sm:mt-20">
        <Research />
      </div>
    </div>
  );
};
