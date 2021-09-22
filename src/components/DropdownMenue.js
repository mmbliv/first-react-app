import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { navResearchData } from "../data/research-data";

const Sidebar = (props) => {
  return (
    <>
      <h1 className="text-Stroke text-lg pl-1">{props.ResearchTag}</h1>
      {navResearchData.map((item, index) => {
        return (
          <>
            <li className="hover:underline p-1 text-left">
              <HashLink smooth to={`/research#${item}`}>
                {item}
              </HashLink>
            </li>
          </>
        );
      })}
    </>
  );
};

export default Sidebar;
