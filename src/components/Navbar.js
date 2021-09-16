import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import Sidebar from "./DropdownMenue";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const sideBarList = ["jjj", "jjjk", "yyyy"];
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <nav className="hidden sm:inline mt-7">
        <ul className="sm:flex flex-row justify-evenly ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={() => sideBar()} onMouseLeave={() => sideBar()}>
            <Link to="/research">Research</Link>
            <ChevronDoubleDownIcon className="h-5 w-5 inline" />
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
            <Link to="/publication">Publication</Link>
          </li>
          <li>
            <Link to="/codes">Codes</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
