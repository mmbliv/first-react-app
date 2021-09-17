import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Navbarsm from "./HambergerMenue";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <div className="text-white bg-gray-700 h-10 flex flex-row justify-around items-center">
        <h4>MINGJIAN WEN</h4>
        <h4 className="underline">
          <a href="mailto:mmbliv@gmail.com">Email Me</a>
        </h4>

        <div
          className="mr-0"
          onMouseEnter={() => sideBar()}
          onMouseLeave={() => sideBar()}
        >
          <MenuIcon className="h-5 w-5 inline sm:hidden" />
          <div className=" text-black">
            <CSSTransition
              in={toggleSidebar}
              timeout={100}
              unmountOnExit
              className="nav"
            >
              <div>
                <Navbarsm />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
