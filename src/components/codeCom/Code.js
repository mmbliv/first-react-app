import React from "react";
import { CodeCom } from "./CodeCom";
import { codeData } from "../../data/code-data";

export const Code = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-Stroke ">CODES</h1>
      {codeData.map((item) => {
        return (
          <ul className="pt-6">
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
  );
};
