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
  //   asign new ordered data to newOrderedData
  const newOrderedDate = orderData(paperData);

  return (
    <div>
      {/* loop through the new object data ; item represent the different year */}
      {Object.keys(newOrderedDate).map((item, index) => {
        return (
          <>
            <div key={index}>
              <button className="w-full h-5 bg-gray-400 text-gray-800">
                {item}
              </button>
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
