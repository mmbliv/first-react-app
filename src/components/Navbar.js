import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import Sidebar from "./DropdownMenue";
import { CSSTransition } from "react-transition-group";
import { sideBarList } from "../data/Navlist";
const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className="mt-6 text-lg font-bold text-gray-700">
      <nav className="hidden sm:inline">
        <ul className="sm:flex flex-row justify-evenly ">
          <li className="hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li onMouseEnter={() => sideBar()} onMouseLeave={() => sideBar()}>
            <NavLink to="/research">Research</NavLink>
            <TiArrowSortedDown className="inline" />
            <div className="absolute left-1/4 w-52 z-10">
              <CSSTransition
                in={toggleSidebar}
                timeout={100}
                unmountOnExit={true}
                className={"nav"}
              >
                <div>
                  <Sidebar sideBarList={sideBarList} />
                </div>
              </CSSTransition>
            </div>
          </li>
          <li>
            <NavLink to="/publication" className="hover:underline">
              Publication
            </NavLink>
          </li>
          <li>
            <NavLink to="/codes" className="hover:underline">
              Codes
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className="hover:underline">
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
