import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";

export const CodeCom = (props) => {
  return (
    <li className=" pt-5">
      <h1 className="font-bold text-lg uppercase">{props.title}</h1>
      <p className=" py-1">{props.info}</p>
      <ul className="pb-2">
        <li className=" text-gray-600 hover:underline hover:text-gray-400">
          {props.github_url && (
            <a href={props.github_url} className="flex items-center">
              <FaGithub />
              <p className="pl-3">GitHub Page</p>
            </a>
          )}
        </li>
        <li className=" text-gray-600 hover:underline hover:text-gray-400">
          {props.document_url && (
            <a href={props.document_url} className="flex items-center">
              <FaRegFile />
              <p className="pl-3">Documentation</p>
            </a>
          )}
        </li>
      </ul>
      <hr />
    </li>
  );
};
