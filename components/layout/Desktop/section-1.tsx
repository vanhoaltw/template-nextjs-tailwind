function DesktopSection1() {
  return (
    <div className="bg-desktop-1 bg-cover bg-center h-full w-full">
      {/* <img
        src="/images/desktop-section-1/main_background_1.png"
        className="w-full h-full"
      /> */}
      <div className="w-full flex flex-col items-center justify-center pt-10 z-10">
        <div className="w-full px-20">
          <div className="relative">
            <img
              src="/images/desktop-section-1/frame_1.PNG"
              alt=""
              className="w-full bg-image-1 bg-contain bg-center"
            />
            <div className="absolute top-0 w-full flex items-center justify-center">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <button
                  className="z-10 mx-1 mt-10 md:mt-14 lg:mt-20 w-1/12"
                  key={item}
                >
                  <img
                    src="/images/desktop-section-1/black_button.PNG"
                    alt=""
                    className=" w-full"
                  />
                </button>
              ))}
            </div>
            <div className="absolute top-1/3 w-full flex items-center justify-center">
              <img
                src="/images/desktop-section-1/logo.PNG"
                alt=""
                className="w-2/12 lg:w-2/12"
              />
            </div>
            <div className="absolute top-1/3 w-full flex items-center justify-between">
              <img
                src="/images/desktop-section-1/char_1.PNG"
                alt=""
                className="w-1/4"
              />
              <img
                src="/images/desktop-section-1/char_2.PNG"
                alt=""
                className="w-1/6"
              />
            </div>
            <div className="absolute -bottom-4 w-full flex items-center justify-center">
              <button className="w-1/6">
                <img
                  src="/images/desktop-section-1/play_button.png"
                  alt=""
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-20">
          <div className="relative">
            <div className="w-full flex items-center justify-center">
              <img
                src="/images/desktop-section-1/tab_1.PNG"
                alt=""
                className="w-9/12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

DesktopSection1.propTypes = {}

export default DesktopSection1
