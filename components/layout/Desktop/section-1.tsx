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
                className="w-full z-10"
              />
              <img
                src="/images/desktop-section-1/frame_1.PNG"
                className="absolute top-0 w-full z-10"
              />
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
                    className="w-full z-10"
                  />
                </button>
              </div>
              <div className="absolute top-[16.33%] w-full flex items-center justify-center z-10">
                <img
                  src="/images/animation/logo.gif"
                  className="w-2/12 lg:w-2/12"
                />
              </div>
              {/* character 1 */}
              <div className="absolute top-[45%] left-0 flex justify-center w-4/12 slide-bottom-1 z-10">
                <img
                  src="/images/desktop-section-1/char_3.gif"
                  className="w-4/5"
                />
              </div>
              {/* character 2 */}
              <div className="absolute top-1/2 right-[12%] flex justify-center w-4/12 slide-bottom-2 z-10">
                <img
                  src="/images/desktop-section-1/char_2.gif"
                  className="w-2/5"
                />
              </div>
              {/* character 3 */}
              <div className="absolute top-[40%] right-0 flex justify-center w-4/12 slide-bottom-3 z-10">
                <img
                  src="/images/desktop-section-1/char_1.gif"
                  className="w-[20%]"
                />
              </div>
              <div className="absolute bottom-[1%] w-full flex items-center justify-center z-20">
                <button className="w-1/5">
                  <img src="/images/animation/Play.gif" className="" />
                </button>
              </div>
              <video
                width="91%"
                autoPlay
                muted
                loop
                className="absolute top-[1%] left-[4%] z-0"
              >
                <source
                  src="/images/desktop-section-1/main_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="w-full px-20">
            <div className="relative h-[600px] ">
              <div className=" absolute top-7 w-full flex items-center justify-center">
                <div className="absolute -top-10 w-[50%] flex items-center justify-between">
                  <button className="z-10 mx-1 mt-10 md:mt-14 lg:mt-20 w-[18%]">
                    <img
                      src="/images/desktop-section-1/blue_button.PNG"
                      className="w-full"
                    />
                  </button>
                  <button className="z-10 mx-1 mt-10 md:mt-14 lg:mt-20 w-[18%]">
                    <img
                      src="/images/desktop-section-1/red_button.PNG"
                      className="w-full"
                    />
                  </button>
                </div>
                <img
                  src="/images/desktop-section-1/tab_2.PNG"
                  className="w-[60%] "
                />
              </div>
              <div className="absolute bottom-0 w-full flex items-center justify-center">
                <img
                  src="/images/desktop-section-1/tab_1.PNG"
                  className="w-[75%]  "
                />
              </div>
              <div className="absolute bottom-[10%] w-full flex items-center justify-between">
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
        <div className="absolute -top-8 w-full flex items-center justify-center">
          <img
            src="/images/animation/trailer_frame.png"
            alt="bg-full"
            className="w-1/2 "
          />
          {!isOpenDialog ? (
            <>
              <img
                src="/images/animation/trailer_gif.gif"
                alt="bg-full"
                className="w-1/3 absolute top-[5.5rem] z-100"
              />
              <div className="w-1/3 flex items-center justify-center absolute top-[45%]">
                <button
                  className="z-200 w-2/12"
                  onClick={() => setIsOpenDialog(true)}
                >
                  <img src="/images/animation/play_trailer.gif" alt="bg-full" />
                </button>
              </div>
            </>
          ) : (
            <video
              autoPlay
              controls
              className="absolute top-6 z-100 w-[42.333333%] "
            >
              <source
                src="/images/desktop-section-2/trailer_frame/15.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </div>
        <div className="absolute bottom-[-8%] w-full flex items-center justify-center z-20">
          <img src="/images/desktop-section-1/main_button.PNG" className="" />
        </div>
      </div>
      {/* section-3 */}
      <div className="bg-image-3 h-full w-full relative overflow-hidden">
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
        <div className="absolute bottom-[2%] right-[-5%] w-full flex items-center justify-center">
          <img src="/images/animation/Egg1.gif" className="w-[16%]" />
          <img src="/images/animation/Egg2.gif" className="w-[16%]" />
        </div>
      </div>
      {/* section-4 */}
      <div className="bg-image-4 h-full w-full relative">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-around items-center mt-[6%] px-8 lg:px-12 xl:px-20">
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
          <div className="w-full flex justify-center items-center my-[2%]">
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
        <div className="absolute top-[-2%] w-full flex items-center justify-center">
          <img
            src="/images/desktop-section-1/main_button.PNG"
            alt=""
            className=""
          />
        </div>
        <img
          src="/images/desktop-section-1/main_background_5.png"
          className="w-full h-full"
        />
        <div className="absolute top-10 mt-96 w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center">
            <img
              src="/images/desktop-section-1/floor_1.PNG"
              className="w-full h-full"
            />
          </div>
        </div>
        <div
          className="absolute top-[2.5%] right-[40%]"
          data-aos="fade-down-right"
        >
          <img src="/images/section-2/char_3.png" className="w-[80%]" />
        </div>
        <div
          className="absolute top-[20.5%] right-[6%]"
          data-aos="fade-down-left"
        >
          <img src="/images/section-2/char1.png" className="w-[90%]" />
        </div>

        <div
          className="absolute top-[38%] right-[70%]"
          data-aos="fade-down-right"
        >
          <img src="/images/section-2/char_4.png" className="w-[80%]" />
        </div>

        <div
          className="absolute top-[55%] right-[25%]"
          data-aos="fade-down-left"
        >
          <img src="/images/section-2/char_6.PNG" className="w-[100%]" />
        </div>

        <div
          className="absolute top-[70%] right-[60%]"
          data-aos="fade-down-right"
        >
          <img src="/images/section-2/char_2.png" className="w-[80%]" />
        </div>
      </div>
    </>
  )
}

DesktopSection1.propTypes = {}

export default DesktopSection1
