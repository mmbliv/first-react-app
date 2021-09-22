import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";

export const CodeCom = (props) => {
  return (
    <li>
      <h1 className="font-bold text-lg uppercase text-Stroke pb-2">
        {props.title}
      </h1>

      <div>
        <p>{props.info}</p>
        <ul>
          <li className=" text-gray-600 hover:underline hover:text-gray-400">
            {props.github_url && (
              <a href={props.github_url} className="pt-2 flex items-center">
                <FaGithub />
                <p className="pl-3">GitHub Page</p>
              </a>
            )}
          </li>
          <li className=" text-gray-600 hover:underline hover:text-gray-400">
            {props.document_url && (
              <a href={props.document_url} className="pt-2 flex items-center">
                <FaRegFile />
                <p className="pl-3">Documentation</p>
              </a>
            )}
          </li>
        </ul>
      </div>
    </li>
  );
};
