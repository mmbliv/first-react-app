import React, { useState } from "react";

export const NewsCom = (props) => {
  const isTextLong = props.content.length > 600;
  const [isReadMore, setIsReadMore] = useState(false);
  console.log(isReadMore);

  console.log(isReadMore);
  return (
    <div>
      <h1 className=" text-Hightlight text-lg">{props.title}</h1>
      <time className="text-Stroke text-sm">{props.date}</time>

      <div>
        {/* if text is long than 600 then there is a read more button, and there will only show 600 long words'by slice string method'.
         */}
        {isReadMore ? (
          <p className="whitespace-pre-line py-3">
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className="w-2/5 h-52 float-left rounded-sm object-cover sm:object-contain"
              />
            )}
            {props.content}
            {isTextLong && (
              <button
                className=" text-Button inline-block pl-4"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? "read less" : "read more"}
              </button>
            )}
          </p>
        ) : (
          <p className="whitespace-pre-line py-3">
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className=" w-2/5 h-52 float-left rounded-sm object-cover sm:object-contain"
              />
            )}
            {props.content.slice(0, 600)}

            {isTextLong && <span>...</span>}
            {isTextLong && (
              <button
                className=" text-Button inline-block pl-4"
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
