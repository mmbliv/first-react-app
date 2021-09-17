import React from "react";
import { PaperCom } from "./PaperCom";
import { paperData } from "../../data/paper-data";
import { findByAltText } from "@testing-library/react";

export const PapersCom = () => {
  const orderData = (item) => {
    const orderedData = {};
    const dataArray = [];
    if (orderedData[item.year] === "undefined") {
      dataArray.push(item);
      orderedData[item.year] = dataArray;
    }
  };
  return (
    <div>
      {paperData.map(
        orderData

        // return (
        //   <>
        //     <div>
        //       <button className="w-full h-5 bg-gray-400 text-gray-800">
        //         2021
        //       </button>
        //     </div>
        //     <PaperCom
        //       key={item.id}
        //       title={item.title}
        //       author={item.author}
        //       year={item.year}
        //       magazine={item.magazine}
        //     />
        //   </>
        // );
      )}
    </div>
  );
};
