import React, { useState } from "react";

export const NewsCom = (props) => {
  const isTextLong = props.content.length > 300;
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
            {props.img !== "undefined" && (
              <img
                src={props.img}
                alt={""}
                className=" w-32 h-32 float-left rounded-sm pr-1"
              />
            )}
            {props.content}
          </p>
        ) : (
          <p className="whitespace-pre-line">
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className=" w-32 h-32 float-left rounded-sm pr-1"
              />
            )}
            {props.content.slice(0, 400)}

            {isTextLong && <span>...</span>}
          </p>
        )}

        {isTextLong && (
          <button
            className=" text-blue-500 underline"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "read less" : "read more"}
          </button>
        )}
      </div>
    </div>
  );
};
