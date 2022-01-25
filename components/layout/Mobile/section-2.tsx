import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
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
            className="absolute top-0 z-0 mt-12 sm:mt-20"
            autoPlay
            loop
            controls
            muted
            style={{
              width: '100%',
              height: 299,
              objectFit: 'cover',
            }}
          >
            <source src="/video/warriors.mp4" type="video/mp4" />
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

        <div className="z-100 w-full absolute top-[12%] mt-10 flex items-center justify-center">
          <div className="z-100 w-[37%] absolute  top-[-135px] right-[75px]">
            <img
              src="/images/section-2/char1.png"
              alt=""
              data-aos="fade-left"
            />
          </div>
          <img
            src="/images/section-2/char_2.png"
            alt=""
            className="z-100 w-[42%] absolute  top-[105px] left-[15px]"
            data-aos="fade-right"
          />
          <img
            src="/images/section-2/char_3.png"
            alt=""
            className="z-100 w-[35%] absolute  top-[14.3rem] right-[45px]"
            data-aos="fade-left"
          />
          <img
            data-aos="fade-right"
            src="/images/section-2/char_4.png"
            alt=""
            className="z-100 w-[35%] absolute  top-[31rem] left-[15px]"
          />

          <img
            src="/images/section-2/stair.png"
            alt=""
            className="z-100  absolute top-[40%] px-4"
          />
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
