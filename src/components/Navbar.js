import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import Sidebar from "./DropdownMenue";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className=" mt-12 text-lg font-bold text-gray-700">
      <nav className="hidden sm:inline">
        <ul className="sm:flex flex-row justify-evenly ">
          <li className=" border-b border-transparent hover:border-Stroke">
            <NavLink to="/">Home</NavLink>
          </li>
          <li onMouseEnter={() => sideBar()} onMouseLeave={() => sideBar()}>
            <NavLink to="/research">Research</NavLink>
            <TiArrowSortedDown className="inline" />
            <div className="absolute left-1/4 w-1/4 z-10 text-sm">
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
              Publication
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/codes"
              className="border-b border-transparent hover:border-Stroke"
            >
              Codes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
