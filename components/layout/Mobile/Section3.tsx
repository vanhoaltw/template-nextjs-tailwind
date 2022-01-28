import React from 'react'
import useWindowDimensions from '../../../lib/hooks/useWindowDimensions'
import { Parallax } from 'react-scroll-parallax'

function Section3() {
  const { height, width } = useWindowDimensions()

  return (
    <>
      <div className="relative z-200">
        <img
          src="/images/section-3/infomation_1.png"
          alt=""
          className="absolute -top-14 p-2 z-200"
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
      <div className="relative overflow-hidden">
        <div className=" absolute top-[15%] flex  items-center justify-center w-full z-20">
          <img
            src="/images/animation/spin_2.gif"
            alt="bg-full"
            className="z-30 w-[95%] absolute top-2 "
          />
          <button className="z-30 ml-[1%] w-[30%] mt-[37%] ">
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
        <div className="absolute top-[-18%] flex items-center justify-center mx-auto w-full z-20">
          <div className="w-11/12 flex items-center justify-center shake-bottom">
            <img
              src="/images/section-3/egg_1.PNG"
              alt="bg-full"
              className="z-30 w-9/12"
            />
          </div>
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
        <div className="absolute top-[22%] flex items-center justify-center w-full px-8 ">
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
      <div className="relative overflow-hidden">
        <div className="bg">
          <img
            src="/images/section-3/background_2_2.PNG"
            alt=""
            className="static w-full top-0 z-10"
          />
          <img
            src="/images/section-3/background_2_2.PNG"
            alt=""
            className="absolute w-full top-0 z-10"
          />
          <img
            src="/images/section-3/window.gif"
            alt=""
            className="absolute top-[50%]  z-0 w-full max-w-[400px]"
          />
        </div>
      </div>
      <div className="relative">
        <Parallax
          translateY={[-80, 330]}
          className="absolute top-[-23%] flex items-center justify-center w-full pl-4 z-100"
        >
          <img
            src="/images/section-3/character_potato.PNG"
            alt=""
            className="w-1/4"
          />
        </Parallax>
        <div className="absolute bottom-[10%] flex items-center justify-center w-full p-8">
          <img src="/images/section-3/stone_1.PNG" alt="" className="z-100 " />
        </div>
        <div className="bg">
          <img
            src="/images/section-3/background_2_3.PNG"
            alt=""
            data-aos="fade-down-right"
            className="static top-0 z-10 "
          />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute bottom-[30%] flex items-start w-3/4 px-4 ml-10">
          <img
            src="/images/section-3/character_pineapple.PNG"
            alt=""
            data-aos="fade-down-right"
            className="z-100 w-1/2 "
          />
        </div>
        <div className="relative w-full">
          <img
            src="/images/section-3/background_2_4.PNG"
            alt=""
            className="w-full z-10"
          />
          <img
            src="/images/section-3/background_2_4.PNG"
            alt=""
            className="absolute w-full top-0 z-10"
          />
          <img
            src="/images/section-3/the_door.gif"
            alt=""
            className="absolute top-[-10%] z-0 w-full p-8 pt-12"
          />
        </div>
      </div>
    </>
  )
}
export default Section3
