import React from "react";
import { PaperCom } from "./PaperCom";
import { paperData } from "../../data/paper-data";
import { findByAltText } from "@testing-library/react";

export const PapersCom = () => {
  // convert the old array data to an new object data with keys of different year

  const orderData = (paperData) => {
    let orderedData = {};
    for (let i = 0; i < paperData.length; i++) {
      if (orderedData[paperData[i].year] === undefined) {
        let dataArray = [];
        dataArray.push(paperData[i]);
        orderedData[paperData[i].year] = dataArray;
      } else {
        orderedData[paperData[i].year].push(paperData[i]);
      }
    }
    return orderedData;
  };
  //   asign new ordered data to newOrderedData which is an object
  const newOrderedDate = orderData(paperData);

  return (
    <div>
      {/* loop through the new object data ; item represent the different year */}
      {Object.keys(newOrderedDate)
        .sort((a, b) => b - a)
        .map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className=" pl-1 w-full h-6 bg-gray-200 text-gray-600 rounded-sm">
                  {item}
                </div>
              </div>
              {newOrderedDate[item].map((paper) => {
                return (
                  <>
                    <PaperCom
                      key={paper.id}
                      title={paper.title}
                      author={paper.author}
                      year={paper.year}
                      magazine={paper.magazine}
                      url={paper.url}
                    />
                  </>
                );
              })}
            </>
          );
        })}
    </div>
  );
};
