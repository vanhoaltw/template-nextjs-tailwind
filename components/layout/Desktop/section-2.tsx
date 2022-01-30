import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Dialog } from '../../shared/dialog/dialog'

function DesktopSection2() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  return (
    <>
      {/* section-1 */}
      <div className="bg-desktop-2-1 bg-cover bg-center h-full w-full pt-20 relative">
        <div className="w-full absolute -top-4 flex justify-center items-center">
          <img
            src="/images/desktop-section-2/name_tab_1.PNG"
            alt=""
            className="w-1/3"
          />
        </div>
        {/* <img
        src="/images/desktop-section-1/main_background_1.png"
        className="w-full h-full"
      /> */}
        <div className="w-full flex items-center justify-evenly z-10 p-10 px-32">
          <img
            src="/images/desktop-section-2/info_tab.PNG"
            alt=""
            className="w-1/2 bg-image-1 bg-contain bg-center p-10"
          />
          <img
            src="/images/desktop-section-2/info_tab.PNG"
            alt=""
            className="w-1/2 bg-image-1 bg-contain bg-center p-10"
          />
        </div>
      </div>
      {/* section-2 */}
      <div className=" h-full w-full relative">
        <div className="bg">
          <img
            src="/images/desktop-section-2/background_2_2.PNG"
            alt=""
            className="static top-0 z-10 w-screen"
          />
        </div>
        <div className="w-full absolute top-2 flex justify-center items-center">
          <img
            src="/images/desktop-section-2/spin_tab.PNG"
            alt=""
            className="w-[20%]"
          />
        </div>
        <div className="absolute top-[18%] w-full flex items-center justify-center z-10 p-10 px-32 pr-[3rem]">
          <img src="/images/animation/spin.gif" alt="" className=" w-[35%]" />
          <button className="z-30 ml-[-22.6%] w-[27%] mt-[1.5%]  ">
            <img
              src="/images/section-3/Animation/spin_button.gif"
              alt="bg-full"
              className=" w-[40%]  "
            />
          </button>
          <div className="z-200 absolute top-20 w-full flex items-center justify-around mr-16">
            <img
              src="/images/animation/Egg1.gif"
              alt=""
              className="w-1/4 p-44 "
            />
            <img
              src="/images/animation/Egg2.gif"
              alt=""
              className="w-1/4 p-44 mr-8"
            />
          </div>
        </div>
        <div className="absolute top-[10%] w-full flex items-center justify-evenly z-0 p-10 px-32 ">
          <img
            src="/images/desktop-section-2/spin_tab_2.PNG"
            alt=""
            className=" w-[80%] mt-44"
          />
        </div>
        <div className=" absolute bottom-[-20%]  w-full flex justify-center items-center   z-10">
          <img
            src="/images/desktop-section-2/cards_tab1.PNG"
            alt=""
            className=" w-[80%]"
          />
          <div className="absolute  w-full  flex justify-center items-center px-14 ">
            <div className="w-[55%] flex py-10 pl-20  ">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src="/images/desktop-section-2/card_1.PNG"
                  className="w-[75%]"
                />
              ))}
            </div>
            <div className="w-[30%] flex top-[10%]">
              <button className="z-10 mx-4 mt-10 md:mt-14 lg:mt-32">
                <img
                  src="/images/desktop-section-2/button_2.PNG"
                  className="w--1/2"
                />
              </button>
              <button className="z-10 mx-4 mt-10 md:mt-14 lg:mt-32">
                <img
                  src="/images/desktop-section-2/button_1.PNG"
                  className="w--1/2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <div className="bg-desktop-2-3 h-[125rem] w-full relative"></div>
      {/* section-4 */}
      <div className="relative">
        <div className="bg">
          <img
            src="/images/desktop-section-2/background_2_4.PNG"
            alt=""
            className="static top-0 z-10 w-screen"
          />
          <img
            src="/images/desktop-section-2/background_2_4.PNG"
            alt=""
            className="absolute top-0 z-10 w-screen"
          />
          <img
            src="/images/section-3/window.gif"
            alt=""
            className="absolute top-32 scale-150 h-[15%] w-[80%] "
          />
        </div>
        <Parallax
          translateY={[0, 400]}
          className="absolute top-0 flex items-center justify-center w-full pl-4 z-100"
        >
          <img
            src="/images/desktop-section-2/character_1.PNG"
            alt=""
            className="w-[14%] ml-10"
          />
        </Parallax>
        <div className="z-10 absolute bottom-[10%] -left-2 flex items-center justify-center w-full p-8">
          <img
            src="/images/desktop-section-2/stair_1.PNG"
            alt=""
            className="z-100  w-1/2"
          />
        </div>
      </div>
      {/* section-5 */}
      <div className="relative">
        <div className="absolute bottom-[47%] left-[25%] flex items-start w-1/3 px-4 ml-10">
          <img
            src="/images/section-3/character_pineapple.PNG"
            alt=""
            data-aos="fade-down-right"
            className="z-100 wdown-right"
          />
        </div>
        <div className="bg">
          <img
            src="/images/desktop-section-2/background_2_5.PNG"
            alt=""
            className="static top-0 z-10 w-screen"
          />
          <img
            src="/images/desktop-section-2/background_2_5.PNG"
            alt=""
            className="absolute top-0 z-10 w-screen"
          />
          <div className=" absolute top-20 w-full flex justify-center items-center ">
            <img src="/images/section-3/the_door.gif" alt="" className=" " />
          </div>
        </div>
        <div className="absolute bottom-[5%] w-full flex items-center justify-between z-20">
          <div className="flex items-center justify-center">
            <img
              src="/images/desktop-section-2/logo_2.png"
              className="w-2/12"
            />
            <img
              src="/images/desktop-section-2/tabbymoon_text.png"
              className="w-6/12"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="w-2/12 px-3">
              <img src="/images/icons/tele.PNG" className="" />
            </button>
            <button className="w-2/12 px-3">
              <img src="/images/icons/twit.PNG" className="" />
            </button>
            <button className="w-2/12 px-3">
              <img src="/images/icons/fb.PNG" className="" />
            </button>
            <button className="w-2/12 px-3">
              <img src="/images/icons/disc.png" className="" />
            </button>
            <button className="w-2/12 px-3">
              <img src="/images/icons/Email.PNG" className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

DesktopSection2.propTypes = {}

export default DesktopSection2
