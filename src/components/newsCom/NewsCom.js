import React, { useState } from "react";
import { Text } from "../../constainers/Languages";

export const NewsCom = (props) => {
  const isTextLong = props.content.length > 600;
  const [isReadMore, setIsReadMore] = useState(false);
  console.log(isReadMore);

  console.log(isReadMore);
  return (
    <div>
      <h1 className=" text-Hightlight text-lg">
        {" "}
        <Text tid={props.title} />
      </h1>
      <time className="text-Stroke text-sm">
        <Text tid={props.date} />
      </time>

      <div>
        {/* if text is long than 600 then there is a read more button, and there will only show 600 long words'by slice string method'.
         */}
        {isReadMore ? (
          <p
            className={` "whitespace-pre-line py-3" ${
              props.img !== "" && "sm:min-h-14"
            } `}
          >
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className=" sm:pr-3 sm:w-4/12 sm:h-52 sm:object-cover sm:float-left rounded-sm"
              />
            )}
            {<Text tid={props.content} />}
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
          <p
            className={` "whitespace-pre-line py-3" ${
              props.img !== "" && "sm:min-h-14"
            } `}
          >
            {props.img !== "" && (
              <img
                src={props.img}
                alt={""}
                className="sm:pr-3 sm:w-4/12 sm:h-52 sm:object-cover sm:float-left rounded-sm"
              />
            )}
            {<Text tid={props.content.slice(0, 600)} />}

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
      <hr />
    </div>
  );
};
