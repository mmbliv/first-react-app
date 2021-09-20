import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { sideBarList } from "../data/Navlist";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-col flex-wrap bg-gray-400 p-2 rounded-md">
        {sideBarList.map((item, index) => {
          return (
            <>
              <ul>
                <li className="hover:underline hover:text-gray-600">
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
