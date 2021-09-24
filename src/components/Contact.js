import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <div>
          <SiGooglescholar />
        </div>
      </li>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <div>
          <FaGithubSquare />
        </div>
      </li>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <div>
          <FaResearchgate />
        </div>
      </li>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <div>
          <FaTwitterSquare />
        </div>
      </li>
    </>
  );
};

export default Contact;
