import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { navResearchData } from "../data/research-data";

const Sidebar = (props) => {
  return (
    <div>
      <ol className=" list-inside list-decimal flex flex-col flex-wrap bg-Secondary text-Main p-4">
        <h1 className="text-Stroke text-lg">{props.ResearchTag}</h1>
        {navResearchData.map((item, index) => {
          return (
            <>
              <li className="hover:underline pt-2 text-left">
                <HashLink smooth to={`/research#${item}`}>
                  {item}
                </HashLink>
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
};

export default Sidebar;
