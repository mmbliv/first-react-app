import React from "react";
import HomeShowSlides from "../homeCom/HomeShowSlides";

import { homepagePaperData } from "../../data/paper-data";
import { PaperCom } from "../publicationCom/PaperCom";
import Contact from "../Contact";

const Home = () => {
  return (
    <div className="w-10/12 my-0 mx-auto">
      <div className="mt-6">
        <HomeShowSlides />
      </div>

      <div className="flex mt-6">
        <div className="w-7/12">
          <h1 className="py-3 text-lg text-Stroke uppercase">self introduce</h1>
          <p>
            I am currently a postdoc scholar at LBNL working with Prof. Kristin
            Persson to study battery electrolytes using machine learning
            techniques. <br />
            <br />I obtained my Ph.D. in Solid Mechanics from the Department of
            Aerospace Engineering and Mechanics at the University of Minnesota.
            Supervised by Prof. Ellad Tadmor, I worked on developing both
            physics-based and machine learning interatomic potentials for 2D
            materials (e.g. graphene and MoS2) and applied them to study the
            structural, mechanical, and thermal properties of 2D materials.
          </p>
          <ul className=" absolute flex text-3xl py-3 gap-3 text-Secondary border-gray-400 border-b">
            <Contact />
          </ul>
        </div>

        <div className="w-5/12 ml-5">
          <div className=" p-2 relative shadow-inner border-Secondary bg-Secondary bg-opacity-20 border-transparent">
            <h1 className="py-3 text-lg text-Stroke text-center">
              LATEST NEWS
            </h1>
            {homepagePaperData.map((paper) => (
              <ul className="text-center min-w-full">
                <PaperCom
                  key={paper.id}
                  title={paper.title}
                  author={paper.author}
                  year={paper.year}
                  magazine={paper.magazine}
                  url={paper.url}
                />
              </ul>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
