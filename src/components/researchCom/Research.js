import React from "react";
import { researchData } from "../../data/research-data";

const Research = () => {
  return (
    <div>
      {researchData.map((item) => (
        <article key={item.id} id={item.shortTitle}>
          <p className="py-4 font-bold text-lg">{item.title}</p>
          <p>{item.infor}</p>
          <img src={item.img} alt={item.title} className="py-4" />
        </article>
      ))}
    </div>
  );
};

export default Research;
