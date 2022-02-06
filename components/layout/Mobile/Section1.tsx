import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import { Dialog } from '../../shared/dialog/dialog'

function Section1() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  return (
    <>
      <div className="relative">
        {/* frame */}
        <div className="absolute top-2 flex justify-between px sm:px-20">
          <div className="z-40 w-2/6 xs:3/12 sm:1/12" data-aos="fade-right">
            <div className="px-4">
              <Menu>
                <Menu.Button>
                  <button>
                    <img src="/images/section-1/btn_home.png" alt="bg-image" />
                  </button>
                </Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <button>
                        <img
                          src="/images/section-1/btn_home.png"
                          alt="bg-image"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button>
                        <img
                          src="/images/section-1/btn_home.png"
                          alt="bg-image"
                        />
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className="z-40 w-2/6 xs:3/12 sm:1/12" data-aos="fade-left">
            <div className="px-4">
              <Menu>
                <Menu.Button>
                  <button>
                    <img src="/images/section-1/btn_pitch.png" alt="bg-image" />
                  </button>
                </Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <button>
                        <img
                          src="/images/section-1/btn_pitch.png"
                          alt="bg-image"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button>
                        <img
                          src="/images/section-1/btn_pitch.png"
                          alt="bg-image"
                        />
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
        <img
          src="/images/section-1/background_1.gif"
          alt="w-96 object-fill"
          className="w-full object-fill"
        />
        <div className="w-full flex flex-col items-center justify-center absolute top-0 z-30 ">
          <img
            src="/images/section-1/a-1.png"
            alt="asset-1"
            className="w-2/6"
          />
          <img
            src="/images/section-1/logo.gif"
            alt="logo"
            className="w-[47%] ml-4 sm:ml-4 -mt-8"
          />
        </div>

        {/* character */}
        <div className="absolute top-80 flex flex-col justify-between w-full z-40 slide-bottom ">
          <img
            src="/images/section-1/character_mobile2.png"
            alt=""
            className="w-[60%] "
          />
        </div>

        {/* button play now*/}
        <div className="absolute bottom-4 w-full h-full flex flex-col items-center justify-end z-50 gap-y-10">
          <button
            className="w-5/12 relative flex items-center justify-center"
            data-aos="fade-down"
          >
            <div className="absolute top-0 play-now-animation">PLAY NOW</div>
            <img
              src="/images/animation/Play.gif"
              alt="bg-full"
              className="absolute top-0"
            />
          </button>
        </div>
        <div className="absolute bottom-[-54%] w-full h-full flex  items-center justify-end z-50 px-2">
          <div className="flex items-center justify-start w-1/2">
            <img src="/images/desktop-section-2/logo_2.png" className="w-1/3" />
          </div>
          <div className="flex items-center justify-end w-1/2 mt-6">
            <button className="w-[12.666667%] ">
              <img src="/images/buttons/icons/tele.PNG" className="" />
            </button>
            <button className="w-[12.666667%] ">
              <img src="/images/buttons/icons/Email.PNG" className="" />
            </button>
            <button className="w-[12.666667%] ">
              <img src="/images/buttons/icons/twit.PNG" className="" />
            </button>
            <button className="w-[12.666667%] ">
              <img src="/images/buttons/icons/fb.PNG" className="" />
            </button>
            <button className="w-[12.666667%]">
              <img src="/images/buttons/icons/disc.PNG" className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-1/2 z-40 flex justify-between px-5">
          <button className="z-0 w-1/5">
            <img
              src="/images/section-1/btn_story.png"
              alt="bg-image"
              data-aos="fade-right"
            />
          </button>
          <button className="z-0 w-1/5">
            <img
              src="/images/section-1/btn_how.png"
              alt="bg-full"
              data-aos="fade-left"
            />
          </button>
        </div>
        <div className="z-0 ">
          <div className=" block ">
            <img src="/images/section-1/bg.png" alt="bg-full" className=" " />
          </div>
          <img src="/images/section-1/footer.png" alt="bg-full" />
          <div className=" w-full h-full flex items-center justify-center">
            <img
              src="/images/animation/trailer_frame.png"
              alt="bg-full"
              className="w-[87.333333%] z-10 h-[50%] absolute bottom-0"
            />
            {!isOpenDialog ? (
              <>
                <img
                  src="/images/animation/trailer_gif.gif"
                  alt="bg-full"
                  className="w-[80%]  z-0 absolute bottom-2"
                />
                <div className="w-full flex items-center justify-center  absolute bottom-[17%]">
                  <button
                    className="z-200 w-[12.666667%] "
                    onClick={() => setIsOpenDialog(true)}
                  >
                    <img
                      src="/images/animation/play_trailer.gif"
                      alt="bg-full"
                    />
                  </button>
                </div>
              </>
            ) : (
              <video
                autoPlay
                controls
                className="absolute bottom-2 z-0 w-[79.666667%]"
              >
                <source
                  src="/images/desktop-section-1/intro.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

Section1.propTypes = {}

export default Section1
