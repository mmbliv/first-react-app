import React from "react";
import { CodeCom } from "./CodeCom";
import { codeData } from "../../data/code-data";

export const Code = () => {
  return (
    <>
      <h1 className="font-bold text-4xl text-Stroke pb-6">CODES</h1>
      <div className="grid grid-cols-2 gap-7 ">
        {codeData.map((item) => {
          return (
            <ul className="p-6 border-gray-50 border-2 bg-Secondary bg-opacity-20 shadow-inner ">
              <CodeCom
                title={item.title}
                key={item.id}
                info={item.info}
                github_url={item.github_url}
                document_url={item.document_url}
              />
            </ul>
          );
        })}
      </div>
    </>
  );
};
