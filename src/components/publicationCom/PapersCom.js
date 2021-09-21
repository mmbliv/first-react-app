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
    <div className="w-10/12">
      {/* loop through the new object data ; item represent the different year */}
      {Object.keys(newOrderedDate)
        .sort((a, b) => b - a)
        .map((item, index) => {
          return (
            <div>
              <div key={index}>
                <div className=" border-gray-300 border-b-2 pt-2">{item}</div>
              </div>
              {newOrderedDate[item].map((paper) => {
                return (
                  <div className="m-6">
                    <ul className="list-disc list-inside">
                      <PaperCom
                        key={paper.id}
                        title={paper.title}
                        author={paper.author}
                        year={paper.year}
                        magazine={paper.magazine}
                        url={paper.url}
                      />
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};
