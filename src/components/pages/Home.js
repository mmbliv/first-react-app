import React from "react";
import HomeShowSlides from "../homeCom/HomeShowSlides";
import { NewsCom } from "../newsCom/NewsCom";
import newsData from "../../data/news-data";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import { Text } from "../../constainers/Languages";
const Home = () => {
  return (
    <div className="w-10/12 my-0 mx-auto">
      <div className="mt-6">
        <HomeShowSlides />
      </div>

      <div className="flex flex-col sm:flex-row mt-6">
        <div className="sm:w-7/12 sm:pr-8">
          <h1 className="py-3 text-2xl text-Stroke uppercase">
            <Text tid="selfintroduce" />
          </h1>
          <p>
            <Text tid="selfintroducecontent" />
          </p>
          <ul className=" absolute flex text-3xl py-3 gap-3 text-Headline border-gray-400 border-b">
            <Contact />
          </ul>
        </div>

        <div className="mt-24 sm:w-5/12 sm:ml-5 sm:mt-8">
          <div className=" p-2 relative shadow-inner border-Secondary bg-Secondary bg-opacity-20 border-transparent">
            <h1 className="py-3 text-2xl text-Stroke text-center">
              LATEST NEWS
            </h1>
            <div className="p-2">
              <NewsCom
                key={newsData[newsData.length - 1].id}
                title={newsData[newsData.length - 1].title}
                date={newsData[newsData.length - 1].date}
                content={newsData[newsData.length - 1].content.slice(0, 400)}
                img={newsData[newsData.length - 1].img}
              />
              <Link
                to="/news"
                className=" text-Button hover:underline absolute right-2 bottom-2"
              >
                more info
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
