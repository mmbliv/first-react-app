import React from "react";
import Sidebar from "../DropdownMenue";
import { sideBarList } from "../../data/Navlist";
import Research from "./Research";
// import { News } from "../newsCom/News";

const ResearchCom = () => {
  return (
    <div>
      <div className="hidden sm:inline sm:fixed sm:w-1/5 sm:pt-32">
        <Sidebar sideBarList={sideBarList} />
      </div>
      <div className=" relative left-1/4 w-9/12 mt-20">
        <Research />
      </div>
    </div>
  );
};

export default ResearchCom;
