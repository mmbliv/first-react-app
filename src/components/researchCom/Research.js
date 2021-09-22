import React from "react";
import { researchData } from "../../data/research-data";

const Research = () => {
  return (
    <div>
      {researchData.map((item) => (
        <>
          <article key={item.id} id={item.shortTitle} className="pt-6 pl-6">
            <p className=" pt-8 pb-4 font-bold text-lg text-Stroke">
              {item.title}
            </p>
            <p>{item.infor}</p>
            <img src={item.img} alt={item.title} className="py-4" />
          </article>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Research;
