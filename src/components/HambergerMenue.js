import React, { useState } from "react";
import Sidebar from "./DropdownMenue";
import { Link } from "react-router-dom";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import { sideBarList } from "../data/Navlist";
import { CSSTransition } from "react-transition-group";

const Navbarsm = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <nav className="nav absolute bg-gray-600 right-0 border-2 w-44 text-white z-10 sm:hidden ">
        <ul>
          <li className="px-1">
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseOver={() => sideBar()}
            className="w-40 flex justify-between px-1"
          >
            <Link to="/research">Research</Link>
            <ChevronDoubleDownIcon className="h-5 w-5 inline" />
          </li>
          <li className="px-0">
            <CSSTransition
              in={toggleSidebar}
              timeout={100}
              unmountOnExit={true}
              className="nav"
            >
              <div>
                <Sidebar sideBarList={sideBarList} />
              </div>
            </CSSTransition>
          </li>

          <li className="px-1">
            <Link to="/publication">Publication</Link>
          </li>
          <li className="px-1">
            <Link to="/codes">Codes</Link>
          </li>
          <li className="px-1">
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbarsm;
