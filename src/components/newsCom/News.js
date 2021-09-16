import React from "react";
import { NewsCom } from "./NewsCom";
import newsData from "../../data/news-data";

export const News = () => {
  return (
    <div>
      <h1 className="pt-4 text-5xl">NEWS</h1>
      {newsData.map((item) => {
        return (
          <NewsCom
            key={item.id}
            title={item.title}
            date={item.date}
            content={item.content}
            img={item.img}
          />
        );
      })}
    </div>
  );
};
