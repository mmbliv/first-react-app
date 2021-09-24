import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Navbarsm from "./HambergerMenue";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const sideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className="fixed right-0 left-0 top-0 z-40">
      <div className=" bg-Headline h-14 flex flex-row justify-around items-center ">
        <Link to="/" className="text-3xl text-ButtonText">
          JOE
        </Link>
        <LanguageSelector />

        <div
          className="mr-0 sm:absolute "
          onMouseEnter={() => sideBar()}
          onMouseLeave={() => sideBar()}
        >
          <MenuIcon className="h-5 w-5 inline sm:hidden text-Main" />
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
    </div>
  );
};

export default Header;
