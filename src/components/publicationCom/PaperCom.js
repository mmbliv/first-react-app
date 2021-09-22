import React from "react";

export const PaperCom = (props) => {
  return (
    <li className="m-4">
      <a
        className="text-lg font-bold text-gray-600 hover:underline hover:text-gray-400"
        href={props.url}
      >
        {props.title}
      </a>
      <p className="pl-6">
        {props.author.map((item) => {
          if (item === "Mingjian Wen" || item === "M Wen") {
            return <span className="text-blue-400">{item};</span>;
          } else {
            return <span>{item};</span>;
          }
        })}
        <span className=" italic">{props.magazine}.</span>
        <span>{props.year}</span>
      </p>
    </li>
  );
};
