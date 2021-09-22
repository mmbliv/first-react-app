import React from "react";
import { NewsCom } from "./NewsCom";
import newsData from "../../data/news-data";
import { Text } from "../../constainers/Languages";

export const News = () => {
  return (
    <div>
      <h1 className="py-4  text-4xl text-Stroke font-bold">
        <Text tid="navnews" />
      </h1>
      {newsData.map((item) => {
        return (
          <>
            <div className="py-4">
              <NewsCom
                key={item.id}
                title={item.title}
                date={item.date}
                content={item.content}
                img={item.img}
              />
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};
