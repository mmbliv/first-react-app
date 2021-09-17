import React from "react";

export const PaperCom = (props) => {
  return (
    <div>
      <p>
        <span>
          <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=RXLH5k4AAAAJ&citation_for_view=RXLH5k4AAAAJ:u5HHmVD_uO8C">
            {props.title}
          </a>
        </span>
        <span>{props.author}</span>
        <span>{props.magazine}</span>
        <span>{props.year}</span>
      </p>
    </div>
  );
};
