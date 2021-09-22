import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <a href="https://scholar.google.com/citations?user=RXLH5k4AAAAJ&hl=en">
          <SiGooglescholar />
        </a>
      </li>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <a href="https://github.com/mjwen">
          <FaGithubSquare />
        </a>
      </li>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <a href="https://www.researchgate.net/profile/Mingjian-Wen">
          <FaResearchgate />
        </a>
      </li>
      <li className="transform hover:scale-125 hover:text-Hightlight">
        <a href="https://twitter.com/wen_mingjian">
          <FaTwitterSquare />
        </a>
      </li>
    </>
  );
};

export default Contact;
