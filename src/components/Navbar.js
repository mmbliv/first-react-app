import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import Sidebar from "./DropdownMenue";
import { CSSTransition } from "react-transition-group";
import { Text } from "../constainers/Languages";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className=" mt-20 text-2xl font-bold text-Headline">
      <nav className="hidden sm:inline">
        <ul className="sm:flex flex-row justify-evenly ">
          <li className=" border-b border-transparent hover:border-Stroke">
            <NavLink to="/">
              <Text tid="navhome" />
            </NavLink>
          </li>
          <li onMouseEnter={() => sideBar()} onMouseLeave={() => sideBar()}>
            <NavLink to="/research">
              <Text tid="navresearch" />
            </NavLink>
            <TiArrowSortedDown className="inline" />
            <div className="absolute left-1/4 w-1/4 z-10 text-sm bg-Secondary pl-2 rounded-sm">
              <CSSTransition
                in={toggleSidebar}
                timeout={100}
                unmountOnExit={true}
                className={"nav"}
              >
                <div>
                  <Sidebar />
                </div>
              </CSSTransition>
            </div>
          </li>
          <li>
            <NavLink
              to="/publication"
              className="border-b border-transparent hover:border-Stroke"
            >
              <Text tid="navpublication" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/codes"
              className="border-b border-transparent hover:border-Stroke"
            >
              <Text tid="navcodes" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className="border-b border-transparent hover:border-Stroke"
            >
              <Text tid="navnews" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
