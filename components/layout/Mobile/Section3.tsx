import React from 'react'
import useWindowDimensions from '../../../lib/hooks/useWindowDimensions'

function Section3() {
  const { height, width } = useWindowDimensions()
  console.log('🚀 ~ file: Section3.tsx ~ line 7 ~ Section3 ~ height', height)

  return (
    <>
      <div className="relative h-screen">
        <img
          src="/images/section-3/infomation_1.png"
          alt=""
          className="absolute -top-14 left-1 z-10 p-2"
        />
        <div className="bg">
          <img
            src="/images/section-3/background_1.JPG"
            alt=""
            className="absolute top-0 z-0"
          />
        </div>
        <div className=" relative h-72  md:h-96">
          <div className="absolute bottom-0  flex items-center justify-center w-full  z-20">
            <button className="z-30 w-1/2 ">
              <img src="/images/section-3/spin_button.PNG" alt="bg-full" />
            </button>
          </div>
          <div className=" h-1/2 relative top-80 flex  items-center justify-center w-full  z-20">
            <img
              src="/images/section-3/spin_egg.PNG"
              alt="bg-full"
              className="z-30 w-5/6  absolute top-2 "
            />
            <div className=" absolute top-28 flex items-center justify-center w-full  z-50">
              <button className="z-30 w-1/4  ">
                <img src="/images/section-3/spin_button2.PNG" alt="bg-full" />
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-8 flex items-center justify-center w-full  z-20">
          <img
            src="/images/section-3/egg_1.PNG"
            alt="bg-full"
            className="z-30 w-9/12"
          />
        </div>
      </div>
      <div className="relative h-[2070px]">
        <div className="absolute -top-10 flex items-center justify-center w-full px-2">
          <img
            src="/images/section-3/iron_chain.png"
            alt=""
            className="z-100 w-11/12 "
          />
        </div>
        <div className="absolute -top-10 flex items-center justify-center w-full px-2">
          <img
            src="/images/section-3/open_button.PNG"
            alt=""
            className="z-100 w-2/12 "
          />
        </div>
        <div className="absolute top-12 flex items-center justify-center w-full px-4">
          <img
            src="/images/section-3/random_card.PNG"
            alt=""
            className="z-100 w-1/2 px-2"
          />
          <img
            src="/images/section-3/random_card.PNG"
            alt=""
            className="z-100 w-1/2 px-2"
          />
        </div>
        <div className="absolute bottom-[56%] flex items-center justify-center w-full px-2">
          <img
            src="/images/section-3/window_scene.JPG"
            alt=""
            className="z-0  "
          />
        </div>
        <div className="absolute bottom-[52%] left-2 flex items-center justify-center w-full ">
          <img
            src="/images/section-3/character_potato.PNG"
            alt=""
            className="z-100 w-1/4"
          />
        </div>
        <div className="absolute bottom-1/4 left-2 flex items-center justify-center w-full p-8">
          <img src="/images/section-3/stone_1.PNG" alt="" className="z-100 " />
        </div>
        <div className="absolute bottom-[9%] flex items-center justify-center w-full px-2">
          <img
            src="/images/section-3/door_scene.JPG"
            alt=""
            className="z-0  "
          />
        </div>
        <div className="absolute bottom-[9%] flex items-start  w-3/4 px-4 ml-6">
          <img
            src="/images/section-3/character_pineapple.PNG"
            alt=""
            className="z-100 w-1/2 "
          />
        </div>
        <div className="bg">
          <img
            src="/images/section-3/background_2.PNG"
            alt=""
            className="absolute -top-10 z-0"
          />
        </div>
      </div>
    </>
  )
}
export default Section3
