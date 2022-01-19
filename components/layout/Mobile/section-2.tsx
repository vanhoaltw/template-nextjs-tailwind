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
          <img
            src="/images/section-2/bg1.jpg"
            alt=""
            className="absolute top-0 z-0 mt-12"
          />
        </div>
        <div className="icons covid absolute top-4 right-0 z-20">
          <img
            src="/images/section-2/covid1.PNG"
            alt=""
            className="z-20 w-20"
          />
          <img
            src="/images/section-2/stone1.png"
            alt=""
            className="z-20 w-24"
          />
        </div>
        <div className="">
          <img src="/images/section-2/tab1.JPG" alt="" className="z-50" />
          <img
            src="/images/section-2/egg.PNG"
            alt=""
            className="z-100 absolute top-80 mt-12"
          />
        </div>
        <div className="flex items-center justify-around absolute top-96 mt-24 w-full">
          <img src="/images/section-2/bt1.PNG" alt="" className="z-100 w-8" />
          <img
            src="/images/section-2/card1.png"
            alt=""
            className="z-100 w-28"
          />
          <img
            src="/images/section-2/card2.PNG"
            alt=""
            className="z-100 w-28"
          />
          <img src="/images/section-2/bt2.PNG" alt="" className="z-100 w-8" />
        </div>
        <div className="flex items-center justify-center w-full absolute top-96 mt-64">
          <img
            src="/images/section-2/heart.PNG"
            alt=""
            className="z-100 w-14"
          />
        </div>
      </div>
      <div className="relative">
        <img src="/images/section-2/2a.JPG" alt="" className="z-0 w-full" />
        <img
          src="/images/section-2/character.PNG"
          alt=""
          className="z-100 w-full absolute top-0 mt-10"
        />
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
