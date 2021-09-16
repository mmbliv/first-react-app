import React from "react";
import HomeShowSlides from "../homeCom/HomeShowSlides";
import { NewsCom } from "../newsCom/NewsCom";
import newsData from "../../data/news-data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-10/12 my-0 mx-auto">
      <div>
        <HomeShowSlides />
      </div>
      <div className="flex">
        <div className="w-7/12">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            quod corporis perspiciatis doloribus consequatur dolore, dolor
            maxime, optio corrupti cumque temporibus esse ipsam hic
            necessitatibus harum voluptates similique nulla ipsum!
          </p>
        </div>
        <div className="w-5/12 ml-5">
          <div className="w-full ">
            <h1>LATEST NEWS</h1>
            <NewsCom
              key={newsData[newsData.length - 1].id}
              title={newsData[newsData.length - 1].title}
              date={newsData[newsData.length - 1].date}
              content={newsData[newsData.length - 1].content.slice(0, 300)}
              img={newsData[newsData.length - 1].img}
            />
            <Link to="/news" className="text-blue-500">
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
