import React from "react";
import { CodeCom } from "./CodeCom";
import { codeData } from "../../data/code-data";

export const Code = () => {
  return (
    <>
      <h1 className="font-bold text-4xl font-serif ">CODES</h1>
      {codeData.map((item) => {
        return (
          <>
            <CodeCom
              title={item.title}
              key={item.id}
              info={item.info}
              github_url={item.github_url}
              document_url={item.document_url}
            />
          </>
        );
      })}
    </>
  );
};
