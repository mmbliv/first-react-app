import React from "react";
import { researchData } from "../../data/research-data";
import { Text } from "../../constainers/Languages";
const Research = () => {
  return (
    <div>
      {researchData.map((item) => (
        <>
          <article key={item.id} id={item.shortTitle} className="pt-6 pl-6">
            <p className=" pt-8 pb-4 font-bold text-lg text-Stroke">
              <Text tid={item.title} />
            </p>
            <p>
              <Text tid={item.infor} />
            </p>
            <img src={item.img} alt={item.title} className="py-4" />
          </article>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Research;
