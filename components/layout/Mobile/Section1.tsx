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
          <div className="z-40 w-2/6 xs:3/12 sm:1/12">
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
          <div className="z-40 w-2/6 xs:3/12 sm:1/12">
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
          src="/images/section-1/bg-1.png"
          alt="w-96 object-fill"
          className=""
        />
        <div className="w-full flex flex-col items-center justify-center absolute top-0 z-30 ">
          <img
            src="/images/section-1/a-1.png"
            alt="asset-1"
            className="w-2/5"
          />
          <img
            src="/images/section-1/logo.png"
            alt="logo"
            className="w-1/3 ml-3 sm:ml-4 -mt-4"
          />
        </div>

        {/* character */}
        <div className="absolute top-80 sm:top-96 flex flex-col justify-between w-full z-40 ">
          <img
            src="/images/section-1/character_mobile.png"
            alt=""
            className="w-5/12"
          />
          <img
            src="/images/section-1/land_mobile.PNG"
            alt=""
            className="w-5/12"
          />
        </div>
        {/* button play now*/}
        <div className="absolute -bottom-16 w-full h-full flex flex-col items-center justify-end z-50 gap-y-10">
          <button className="w-5/12 mr-2">
            <img src="/images/section-1/btn_play.png" alt="bg-full" />
          </button>
          <div className=" z-40 flex justify-between px-5">
            <button className="z-0 w-1/5 ">
              <img src="/images/section-1/btn_story.png" alt="bg-image" />
            </button>
            <button className="z-0 w-1/5">
              <img src="/images/section-1/btn_how.png" alt="bg-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bottom-0 z-0">
          <div className=" block ">
            <img src="/images/section-1/bg.png" alt="bg-full" className=" " />
          </div>
          <img src="/images/section-1/footer.png" alt="bg-full" />
          <div className="absolute bottom-10 w-full flex items-center justify-center">
            <img
              src="/images/section-1/video.png"
              alt="bg-full"
              className="w-4/5"
            />
            <div className="w-full flex items-center justify-center absolute top-1/3">
              <button
                className="z-40 w-1/12"
                onClick={() => setIsOpenDialog(true)}
              >
                <img src="/images/section-1/btn_play_video.png" alt="bg-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        mobileSizeMode={false}
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

Section1.propTypes = {}

export default Section1
