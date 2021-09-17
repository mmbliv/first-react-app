import React, { useState } from "react";

export const NewsCom = (props) => {
  const isTextLong = props.content.length > 600;
  const [isReadMore, setIsReadMore] = useState(false);
  console.log(isReadMore);

  console.log(isReadMore);
  return (
    <div>
      <h1 className="text-blue-500">{props.title}</h1>
      <time className="text-gray-600">{props.date}</time>

      <div>
        {isReadMore ? (
          <p className="whitespace-pre-line">
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className="w-2/5 h-52 float-left rounded-sm pr-1 object-cover sm:object-contain"
              />
            )}
            {props.content}
            {isTextLong && (
              <button
                className=" text-blue-400 inline-block pl-4"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? "read less" : "read more"}
              </button>
            )}
          </p>
        ) : (
          <p className="whitespace-pre-line">
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className=" w-2/5 h-52 float-left rounded-sm pr-1 object-cover sm:object-contain"
              />
            )}
            {props.content.slice(0, 600)}

            {isTextLong && <span>...</span>}
            {isTextLong && (
              <button
                className=" text-blue-400 inline-block pl-4"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? "read less" : "read more"}
              </button>
            )}
          </p>
        )}
      </div>
    </div>
  );
};
