import { useState } from 'react'
import { Dialog } from '../../shared/dialog/dialog'
import { Carousel } from '@trendyol-js/react-carousel'

function DesktopSection1() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  return (
    <>
      {/* section-1 */}
      <div className="bg-desktop-1 bg-cover bg-center h-full w-full">
        {/* <img
        src="/images/desktop-section-1/main_background_1.png"
        className="w-full h-full"
      /> */}
        <div className="w-full flex flex-col items-center justify-center pt-10 z-10">
          <div className="w-full px-20">
            <div className="relative w-full">
              <img
                src="/images/desktop-section-1/frame_1.PNG"
                className="w-full bg-image-1 bg-contain bg-center"
              />
              <div className="absolute top-5 flex items-center justify-between w-full">
                <img
                  src="/images/desktop-section-1/boss_1.gif"
                  className="w-3/12"
                />
                <img
                  src="/images/desktop-section-1/boss_2.gif"
                  className="w-3/12"
                />
              </div>
              <div className="absolute top-0 w-full flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <button
                    className="z-10 mx-1 mt-10 md:mt-14 lg:mt-20 w-1/12"
                    key={item}
                  >
                    <img
                      src="/images/desktop-section-1/black_button.PNG"
                      className="w-full"
                    />
                  </button>
                ))}
                <button className="z-10 mx-1 mt-10 md:mt-14 lg:mt-20 w-1/12">
                  <img
                    src="/images/desktop-section-1/button_y.PNG"
                    className="w-full"
                  />
                </button>
              </div>
              <div className="absolute top-1/3 w-full flex items-center justify-center">
                <img
                  src="/images/desktop-section-1/logo.PNG"
                  className="w-2/12 lg:w-2/12"
                />
              </div>
              {/* character 1 */}
              <div className="absolute top-[45%] left-0 flex justify-center w-4/12 slide-bottom-1">
                <img
                  src="/images/desktop-section-1/char_3.gif"
                  className="w-4/5"
                />
              </div>
              {/* character 2 */}
              <div className="absolute top-1/2 right-[12%] flex justify-center w-4/12 slide-bottom-2">
                <img
                  src="/images/desktop-section-1/char_2.gif"
                  className="w-2/5"
                />
              </div>
              {/* character 3 */}
              <div className="absolute top-[40%] right-0 flex justify-center w-4/12 slide-bottom-3">
                <img
                  src="/images/desktop-section-1/char_1.gif"
                  className="w-[20%]"
                />
              </div>
              <div className="absolute bottom-[2%] w-full flex items-center justify-center">
                <button className="w-1/6">
                  <img src="/images/animation/Play.gif" className="" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-20">
            <div className="relative">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/images/desktop-section-1/tab_1.PNG"
                  className="w-9/12"
                />
              </div>
              <div className="absolute bottom-[0%] w-full flex items-center justify-between">
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
                  <button className="w-3/12">
                    <img
                      src="/images/desktop-section-2/telegram.PNG"
                      className=""
                    />
                  </button>
                  <button className="w-2/12">
                    <img
                      src="/images/desktop-section-2/twiter.PNG"
                      className=""
                    />
                  </button>
                  <button className="w-2/12">
                    <img
                      src="/images/desktop-section-2/facebook.PNG"
                      className=""
                    />
                  </button>
                  <button className="w-2/12">
                    <img
                      src="/images/desktop-section-2/discord.png"
                      className=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className=" h-full w-full relative">
        <img
          src="/images/desktop-section-1/main_background_2.png"
          className="w-full h-full"
        />
        <div className="absolute -top-5 w-full flex items-center justify-center">
          <img src="/images/desktop-section-1/video.png" className="w-3/5" />
        </div>
        <div className="absolute top-1/4 w-full flex items-center justify-center">
          <button className="w-1/12" onClick={() => setIsOpenDialog(true)}>
            <img
              src="/images/desktop-section-1/btn_play_video.png"
              className="w-full"
            />
          </button>
        </div>
        <div className="absolute -bottom-8 w-full flex items-center justify-center z-20">
          <img
            src="/images/desktop-section-1/main_button.PNG"
            className="xl:w-56"
          />
        </div>
      </div>
      {/* section-3 */}
      <div className="bg-image-3 h-full w-full relative">
        <div className="w-full flex items-center justify-center">
          <img
            src="/images/desktop-section-1/main_background_3.png"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-0 w-full flex justify-end items-end">
          <div className="w-2/12 mr-20 mt-20 flex flex-col justify-center">
            <img
              src="/images/desktop-section-1/covid_char.PNG"
              className="w-full slide-bottom-1"
            />
            <img
              src="/images/desktop-section-1/stone_1.PNG"
              className="w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-[2%] right-[0%] w-full flex items-center justify-center">
          <img src="/images/animation/Egg1.gif" className="w-[12%]" />
          <img src="/images/animation/Egg2.gif" className="w-[12%]" />
        </div>
      </div>
      {/* section-4 */}
      <div className="bg-image-4 h-full w-full relative">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full absolute top-0 flex justify-center items-center">
            <img
              src="/images/desktop-section-1/button_card.PNG"
              className="w-1/6"
            />
          </div>
          <div className="w-full flex justify-around items-center mt-48 px-8 lg:px-12 xl:px-20">
            <Carousel
              show={5}
              slide={1}
              swiping={true}
              transition={1}
              rightArrow={
                <div className="flex items-center h-full cursor-pointer">
                  <img
                    src="/images/section-2/bt2.png"
                    alt=""
                    className="z-100 w-full"
                  />
                </div>
              }
              leftArrow={
                <div className="flex items-center h-full cursor-pointer">
                  <img
                    src="/images/section-2/bt1.PNG"
                    alt=""
                    className="z-100 w-full"
                  />
                </div>
              }
            >
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item) => (
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
          <div className="w-full flex justify-center items-center my-16 lg:my-20 xl:my-24">
            <img src="/images/desktop-section-1/heart_1.png" className="" />
          </div>
          <div className="w-full flex justify-center items-center mb-24">
            <img
              src="/images/desktop-section-1/frame_2.PNG"
              className="lg:3/5 xl:w-2/3"
            />
          </div>
        </div>
      </div>
      {/* section-5 */}
      <div className="h-full w-full relative">
        <img
          src="/images/desktop-section-1/main_background_5.png"
          className="w-full h-full"
        />
        <div className="absolute top-0 mt-96 w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center">
            <img
              src="/images/desktop-section-1/floor_1.PNG"
              className="w-full h-full"
            />
          </div>
        </div>
        <div
          className="absolute top-[3%] right-[40%]"
          data-aos="fade-down-right"
        >
          <img src="/images/section-2/char1.png" className="w-[90%]" />
        </div>
        <div
          className="absolute top-[22%] right-[6%]"
          data-aos="fade-down-left"
        >
          <img src="/images/section-2/char_2.png" className="w-[80%]" />
        </div>

        <div
          className="absolute top-[37%] right-[70%]"
          data-aos="fade-down-right"
        >
          <img src="/images/section-2/char_6.PNG" className="w-[100%]" />
        </div>

        <div
          className="absolute top-[48%] right-[15%]"
          data-aos="fade-down-left"
        >
          <img src="/images/section-2/char_3.png" className="w-[80%]" />
        </div>

        <div
          className="absolute top-[69%] right-[70%]"
          data-aos="fade-down-right"
        >
          <img src="/images/section-2/char_4.png" className="w-[80%]" />
        </div>
      </div>
      <Dialog
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        className="w-full"
      >
        <video width="800" autoPlay>
          <source src="/images/desktop-section-1/intro.mp4" type="video/mp4" />
        </video>
      </Dialog>
    </>
  )
}

DesktopSection1.propTypes = {}

export default DesktopSection1
