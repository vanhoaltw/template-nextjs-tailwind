import React from 'react'
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
          <video
            className="absolute top-0 z-0 mt-10 sm:mt-20"
            autoPlay
            loop
            muted
            style={{
              width: '99%',
              height: 340,
              objectFit: 'cover',
            }}
          >
            <source src="/video/background.mp4" type="video/mp4" />
          </video>
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
          <div className="flex items-center justify-around mt-14 sm:mt-24">
            <img
              src="/images/section-2/bt1.PNG"
              alt=""
              className="z-100 w-1/12"
            />

            <img
              src="/images/section-2/card1.png"
              alt=""
              className="z-100 w-1/3 sm:w-1/4"
            />
            <img
              src="/images/section-2/card2.PNG"
              alt=""
              className="z-100 w-1/3 sm:w-1/4"
            />
            <img
              src="/images/section-2/bt2.png"
              alt=""
              className="z-100 w-1/12"
            />
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
        <div className="z-100 w-full absolute top-0 mt-20 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2">
            <div className=""></div>
            <img
              src="/images/section-2/char1.png"
              alt=""
              className="z-100 w-4/5"
              data-aos="fade-down-left"
            />
          </div>
          <div className="grid grid-cols-2 mt-20">
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
