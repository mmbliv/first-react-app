import React, { useState } from "react";
import HomeShowSlide from "./HomeShowSlide";
import homeShowSlides from "../../data/home-show-slides";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

const HomeShowSlides = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  console.log(slideIndex);
  const [click, setClick] = useState(true);

  const nextSlide = () => {
    setClick(true);
    if (slideIndex !== homeShowSlides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === homeShowSlides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    setClick(false);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(homeShowSlides.length);
    }
  };
  return (
    <>
      {homeShowSlides
        .filter((item) => item.id === slideIndex)
        .map((i) => (
          <div className="relative my-20 overflow-hidden mx-auto h-96 w-8/12 ">
            <TransitionGroup>
              <CSSTransition
                className={
                  click
                    ? `slide-next absolute top-0 w-full`
                    : `slide-pre absolute top-0 w-full`
                }
                key={i.id}
                timeout={500}
              >
                <div>
                  <HomeShowSlide
                    item={i}
                    key={i.id}
                    total={homeShowSlides.length}
                  />
                </div>
              </CSSTransition>
            </TransitionGroup>
            <button
              onClick={() => {
                nextSlide();
              }}
              className="text-center w-9 h-9 text-white bg-gray-600 opacity-95 absolute top-1/2 right-0"
            >
              <ChevronDoubleRightIcon />
            </button>
            <button
              onClick={() => {
                prevSlide();
              }}
              className=" text-center w-9 h-9 text-white bg-gray-600 absolute top-1/2 left-0"
            >
              <ChevronDoubleLeftIcon />
            </button>
          </div>
        ))}
    </>
  );
};

export default HomeShowSlides;
