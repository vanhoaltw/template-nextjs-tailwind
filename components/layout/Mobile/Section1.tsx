import React from 'react'
import PropTypes from 'prop-types'

function Section1() {
  return (
    <>
      <div className="h-screen relative">
        {/* Khung */}
        <div className="bg h-3/4">
          <div className=" top-10 z-40 flex justify-between relative px-4 ">
            <button className=" z-0 w-4/12  px-4">
              <img src="/images/section-1/btn_home.png" alt="bg-image" />
            </button>
            <button className=" z-0 w-4/12  px-4">
              <img src="/images/section-1/btn_pitch.png" alt="bg-full" />
            </button>
          </div>
          <img
            src="/images/section-1/khung-1.png"
            alt="cover"
            className="absolute top-0 z-20 mt-1"
          />
          <img
            src="/images/section-1/a-1.png"
            alt="asset-1"
            className="absolute top-0 z-30 mt-1 p-32 pt-0"
          />
          <img
            src="/images/section-1/logo.png"
            alt="logo"
            className="absolute top-24 left-32 z-20 mt-1 w-1/3 "
          />
          <img
            src="/images/section-1/bg-1.png"
            alt="bg-image"
            className="absolute top-0 z-10 "
          />

          {/* char */}
          <img
            src="/images/section-1/char-1.png"
            alt="bg-image"
            className="absolute top-80 z-40 w-2/6"
          />
          <img
            src="/images/section-1/char-2.png"
            alt="bg-full"
            className="absolute top-96 left-64 z-40 w-1/4  "
          />
          <button className="absolute bottom-24  left-28 z-40 w-5/12 mr-2 ">
            <img src="/images/section-1/btn_play.png" alt="bg-full" />
          </button>
          <div className=" absolute bottom-7 z-40 flex justify-between  px-6   ">
            <button className=" z-0 w-1/5  ">
              <img src="/images/section-1/btn_story.png" alt="bg-image" />
            </button>
            <button className=" z-0 w-1/5 ">
              <img src="/images/section-1/btn_how.png" alt="bg-full" />
            </button>
          </div>
        </div>

        <div className=" absolute bottom-0 z-0 h-2/5  ">
          <div className=" block ">
            <img src="/images/section-1/bg.png" alt="bg-full" className=" " />
          </div>

          <div className="block relative">
            <img src="/images/section-1/footer.png" alt="bg-full" />
            <div className=" absolute bottom-16 left-16 block w-8/12 ">
              <img
                src="/images/section-1/video.png"
                alt="bg-full"
                className=" "
              />
            </div>
            <button className="absolute bottom-28  right-40 z-40 w-1/12  ">
              <img src="/images/section-1/btn_play_video.png" alt="bg-full" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

Section1.propTypes = {}

export default Section1
