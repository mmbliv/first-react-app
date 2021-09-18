import React from "react";

export const CodeCom = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.info}</p>
      <ul>
        <li>
          {props.github_url && <a href={props.github_url}>GitHub Page</a>}
        </li>
        <li>
          {props.document_url && <a href={props.document_url}>Documentation</a>}
        </li>
      </ul>
    </article>
  );
};
