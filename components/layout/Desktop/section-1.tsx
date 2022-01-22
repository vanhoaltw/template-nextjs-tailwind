function Section1() {
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
      {/* section-2 */}
      <div className=" h-full w-full relative">
        <img
          src="/images/desktop-section-1/main_background_2.png"
          alt=""
          className="w-full h-full"
        />
        <div className="absolute -top-5 w-full flex items-center justify-center">
          <img
            src="/images/desktop-section-1/video.png"
            alt=""
            className="w-3/5"
          />
        </div>
        <div className="absolute top-1/4 w-full flex items-center justify-center">
          <button className="w-1/12">
            <img
              src="/images/desktop-section-1/btn_play_video.png"
              alt=""
              className="w-full"
            />
          </button>
        </div>
        <div className="absolute -bottom-8 w-full flex items-center justify-center z-20">
          <img
            src="/images/desktop-section-1/main_button.PNG"
            alt=""
            className="xl:w-56"
          />
        </div>
      </div>
      {/* section-3 */}
      <div className="bg-image-3 h-full w-full relative">
        <div className="w-full flex items-center justify-center">
          <img
            src="/images/desktop-section-1/main_background_3.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-0 w-full flex justify-end items-end">
          <div className="w-2/12 mr-20 mt-20 flex flex-col justify-center">
            <img
              src="/images/desktop-section-1/covid_char.PNG"
              alt=""
              className="w-full"
            />
            <img
              src="/images/desktop-section-1/stone_1.PNG"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* section-4 */}
      <div className="bg-image-4 h-full w-full relative">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full absolute top-0 flex justify-center items-center">
            <img
              src="/images/desktop-section-1/button_card.PNG"
              alt=""
              className="w-1/6"
            />
          </div>
          <div className="w-full flex justify-around items-center mt-24 px-8 lg:px-12 xl:px-20">
            <button className="w-1/12 flex justify-center">
              <img
                src="/images/desktop-section-1/nextcard_1.PNG"
                alt=""
                className=""
              />
            </button>
            {[1, 2, 3, 4, 5].map((item) => (
              <button className="w-3/12" key={item}>
                <img
                  src={`/images/desktop-section-1/card_${item}.PNG`}
                  alt=""
                  className="w-full"
                />
              </button>
            ))}
            <button className="w-1/12 flex justify-center">
              <img
                src="/images/desktop-section-1/nextcard_2.PNG"
                alt=""
                className=""
              />
            </button>
          </div>
          <div className="w-full flex justify-center items-center my-16 lg:my-20 xl:my-24">
            <img
              src="/images/desktop-section-1/heart_1.png"
              alt=""
              className=""
            />
          </div>
          <div className="w-full flex justify-center items-center mb-24">
            <img
              src="/images/desktop-section-1/frame_2.PNG"
              alt=""
              className="lg:3/5 xl:w-2/3"
            />
          </div>
        </div>
      </div>
      {/* section-5 */}
      <div className="bg-image-5 h-full w-full relative">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center mt-96 mb-64">
            <img
              src="/images/desktop-section-1/floor_1.PNG"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

Section1.propTypes = {}

export default Section1
