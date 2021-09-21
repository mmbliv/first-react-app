import React from "react";
import HomeShowSlides from "../homeCom/HomeShowSlides";
import { NewsCom } from "../newsCom/NewsCom";
import newsData from "../../data/news-data";
import { Link } from "react-router-dom";

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
        </div>
        <div className="w-5/12 ml-5">
          <div className="w-full relative">
            <h1 className="py-3 text-lg text-Stroke">LATEST NEWS</h1>
            <NewsCom
              key={newsData[newsData.length - 1].id}
              title={newsData[newsData.length - 1].title}
              date={newsData[newsData.length - 1].date}
              content={newsData[newsData.length - 1].content.slice(0, 400)}
              img={newsData[newsData.length - 1].img}
            />

            <Link
              to="/news"
              className=" text-Button hover:underline absolute right-0"
            >
              more info
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
