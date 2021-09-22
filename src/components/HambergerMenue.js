import React, { useState } from "react";
import Sidebar from "./DropdownMenue";
import { Link } from "react-router-dom";

import { TiArrowSortedDown } from "react-icons/ti";

import { CSSTransition } from "react-transition-group";

const Navbarsm = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <nav className="nav absolute bg-Secondary right-0 border-2 w-44 text-Headline z-10 sm:hidden ">
        <ul className="relative">
          <li className="px-1 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseOver={() => sideBar()}
            className="w-40 flex justify-between px-1 hover:underline"
          >
            <Link to="/research">Research</Link>
            <TiArrowSortedDown className="inline" />
          </li>
          <li className="absolute right-44 w-56 bg-Secondary text-Headline px-2">
            <CSSTransition
              in={toggleSidebar}
              timeout={500}
              unmountOnExit={true}
              className="nav"
            >
              <div>
                <Sidebar />
              </div>
            </CSSTransition>
          </li>

          <li className="px-1 hover:underline">
            <Link to="/publication">Publication</Link>
          </li>
          <li className="px-1 hover:underline">
            <Link to="/codes">Codes</Link>
          </li>
          <li className="px-1 hover:underline">
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbarsm;
