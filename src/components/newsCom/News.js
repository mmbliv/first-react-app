import React from "react";
import { NewsCom } from "./NewsCom";
import newsData from "../../data/news-data";

export const News = () => {
  return (
    <div>
      <h1 className="pt-4 text-5xl">NEWS</h1>
      {newsData.map((item) => {
        return (
          <div className="border-gray-600 border-b-2 my-5 pb-2">
            <NewsCom
              key={item.id}
              title={item.title}
              date={item.date}
              content={item.content}
              img={item.img}
            />
          </div>
        );
      })}
    </div>
  );
};
