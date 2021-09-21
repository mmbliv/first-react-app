import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { sideBarList } from "../data/Navlist";

const Sidebar = (props) => {
  return (
    <div>
      <ul className="flex flex-col flex-wrap bg-Secondary text-Main p-4 rounded-md">
        <h1 className="text-Stroke">{props.ResearchTag}</h1>
        {sideBarList.map((item, index) => {
          return (
            <>
              <ul>
                <li className=" p-2 hover:underline hover:text-gray-600">
                  <HashLink smooth to={`/research#${item}`}>
                    {item}
                  </HashLink>
                </li>
              </ul>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
