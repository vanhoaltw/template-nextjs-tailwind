import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
function Section2() {
  return (
    <>
      <div className="relative">
        <div className="bg">
          <img
            src="/images/section-2/1a.PNG"
            alt=""
            className="static top-0 z-10"
          />
          <img
            src="/images/section-2/1a.PNG"
            alt=""
            className="absolute top-0 z-10"
          />
          <img
            src="/images/animation/mobile_2.gif"
            alt=""
            className="absolute top-24 scale-150"
          />
        </div>
        <div className="icons covid absolute top-4 right-0 z-20 w-full flex items-center justify-end slide-bottom">
          <div className="w-full flex flex-col items-end justify-end">
            <img
              src="/images/section-2/covid1.PNG"
              alt=""
              className="z-20 w-3/12 mr-1 "
            />
            <img
              src="/images/section-2/stone1.png"
              alt=""
              className="z-20 w-3/12"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/images/section-2/tab1.JPG" alt="" className="z-50" />
        <div className="w-full absolute top-0 flex flex-col">
          <img
            src="/images/section-2/egg.PNG"
            alt=""
            className="z-100 absolute -top-14 sm:-top-20 w-full"
          />
          <div className="z-200 absolute -top-20 sm:-top-24 w-full flex items-center justify-center">
            <img src="/images/animation/Egg1.gif" alt="" className="w-1/4" />
            <img src="/images/animation/Egg2.gif" alt="" className="w-1/4" />
          </div>
          <div className="mt-14 sm:mt-24">
            <Carousel
              show={2}
              slide={1}
              swiping={true}
              transition={1}
              rightArrow={
                <div className="flex items-center h-full">
                  <img
                    src="/images/section-2/bt2.png"
                    alt=""
                    className="z-100 w-full"
                  />
                </div>
              }
              leftArrow={
                <div className="flex items-center h-full">
                  <img
                    src="/images/section-2/bt1.PNG"
                    alt=""
                    className="z-100 w-full"
                  />
                </div>
              }
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className="flex items-center justify-center w-full"
                  key={item}
                >
                  <img
                    src={`/images/section-2/card_${item}.PNG`}
                    alt=""
                    className="z-100 w-4/5"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex items-center justify-center w-full mt-1 sm:mt-16">
            <img
              src="/images/section-2/heart.PNG"
              alt=""
              className="z-100 w-1/12"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/images/section-2/2a.JPG" alt="" className="z-0 w-full" />
        <img
          src="/images/section-2/stair.png"
          alt=""
          className="absolute w-full top-0 z-50 mt-56"
        />
        <div className="z-100 w-full absolute top-0 mt-16 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 pb-2">
            <div className=""></div>
            <img
              src="/images/section-2/char1.png"
              alt=""
              className="z-100 w-4/5"
              data-aos="fade-down-left"
            />
          </div>
          <div className="grid grid-cols-2 mt-[5.7em]">
            <img
              src="/images/section-2/char_2.png"
              alt=""
              className="z-100 w-full"
              data-aos="fade-down-right"
            />
            <div className=""></div>
          </div>
          <div className="grid grid-cols-2">
            <div className=""></div>
            <img
              src="/images/section-2/char_3.png"
              alt=""
              className="z-100 w-4/5"
              data-aos="fade-down-left"
            />
          </div>

          <div className="grid grid-cols-2 mt-16">
            <img
              data-aos="fade-down-right"
              src="/images/section-2/char_4.png"
              alt=""
              className="z-100 w-4/5"
            />
            <div className=""></div>
          </div>
        </div>

        <div className="absolute -top-4 flex items-center justify-center w-full">
          <img
            src="/images/section-2/name tab.png"
            alt=""
            className="z-100 w-40"
          />
        </div>
      </div>
    </>
  )
}
export default Section2
