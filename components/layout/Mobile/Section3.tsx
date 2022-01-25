import React from 'react'
import useWindowDimensions from '../../../lib/hooks/useWindowDimensions'

function Section3() {
  const { height, width } = useWindowDimensions()

  return (
    <>
      <div className="relative">
        <img
          src="/images/section-3/infomation_1.png"
          alt=""
          className="absolute -top-14 left-1 z-10 p-2"
        />
        <div className="absolute bottom-[-30%]  flex items-center justify-center w-full  z-20">
          <button className="z-30 w-1/2 ">
            <img src="/images/section-3/spin_button.PNG" alt="bg-full" />
          </button>
        </div>

        <div className="bg">
          <img
            src="/images/section-3/background_1.JPG"
            alt=""
            className="static top-0 z-0"
          />
        </div>
      </div>
      <div className="relative">
        <div className=" absolute top-[20%] flex  items-center justify-center w-full  z-20">
          <img
            src="/images/section-3/Animation/spin.gif"
            alt="bg-full"
            className="z-30 w-[80%]  absolute top-2 "
          />

          <button className="z-30 ml-[1%] w-[25%] mt-[32%] ">
            <img
              src="/images/section-3/Animation/spin_button.gif"
              alt="bg-full"
            />
          </button>
        </div>
        <div className="bg">
          <img
            src="/images/section-3/background_1_1.JPG"
            alt=""
            className="static top-0 z-0"
          />
        </div>
      </div>
      <div className="relative">
        <div className=" absolute top-[-20%] flex items-center justify-center w-full  z-20 shake-bottom">
          <img
            src="/images/section-3/egg_1.PNG"
            alt="bg-full"
            className="z-30 w-9/12"
          />
        </div>
        <div className="absolute top-[3%] flex items-center justify-center w-full px-2">
          <img
            src="/images/section-3/iron_chain.png"
            alt=""
            className="z-100 w-11/12 "
          />
        </div>
        <div className="absolute top-[3%] flex items-center justify-center w-full px-2">
          <img
            src="/images/section-3/open_button.PNG"
            alt=""
            className="z-100 w-2/12 "
          />
        </div>
        <div className="absolute top-[22%] flex items-center justify-center w-full px-8">
          <div className="flip-card  w-1/2 px-2">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/section-3/random_card.PNG" alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <img
                  src="/images/section-3/Animation/Card/fbc619afa4264938d273df246d6928a4hYhs1xHBFlqpyd8V-1.png"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
          <div className="flip-card-2  w-1/2 px-2">
            <div className="flip-card-inner-2">
              <div className="flip-card-front-2">
                <img src="/images/section-3/random_card.PNG" alt="Avatar" />
              </div>
              <div className="flip-card-back-2">
                <img
                  src="/images/section-3/Animation/Card/fbc619afa4264938d273df246d6928a4hYhs1xHBFlqpyd8V-0.png"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg">
          <img
            src="/images/section-3/background_2_1.PNG"
            alt=""
            className="static top-0 z-0"
          />
        </div>
      </div>
      <div className="relative">
        <div className="bg">
          <img
            src="/images/section-3/background_2_2.PNG"
            alt=""
            className="static top-0 z-10"
          />
          <img
            src="/images/section-3/background_2_2.PNG"
            alt=""
            className="absolute top-0 z-10"
          />
          <video
            className="absolute top-[46%]  z-0 w-full max-w-[400px]"
            autoPlay
            loop
            controls
            muted
            style={{
              width: '100%',
              height: 225,
              objectFit: 'cover',
            }}
          >
            <source src="/video/window.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-23%] flex items-center justify-center w-full ">
          <img
            src="/images/section-3/character_potato.PNG"
            alt=""
            className="z-100 w-1/4"
          />
        </div>
        <div className="absolute bottom-[10%] flex items-center justify-center w-full p-8">
          <img src="/images/section-3/stone_1.PNG" alt="" className="z-100 " />
        </div>
        <div className="bg">
          <img
            src="/images/section-3/background_2_3.PNG"
            alt=""
            className="static top-0 z-10"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-[30%] flex items-start  w-3/4 px-4 ml-10">
          <img
            src="/images/section-3/character_pineapple.PNG"
            alt=""
            className="z-100 w-1/2 "
          />
        </div>
        <div className="bg">
          <img
            src="/images/section-3/background_2_4.PNG"
            alt=""
            className="static top-0 z-10"
          />
          <img
            src="/images/section-3/background_2_4.PNG"
            alt=""
            className="absolute top-0 z-10"
          />
          <video
            className="absolute top-[10%]  z-0 w-full"
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
            <source src="/video/door.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}
export default Section3
