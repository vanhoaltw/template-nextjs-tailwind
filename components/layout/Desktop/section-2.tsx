import { useState } from 'react'
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
      <div className="bg-desktop-2-2 h-full w-full relative">
        <div className="w-full absolute top-0 flex justify-center items-center">
          <img
            src="/images/desktop-section-2/spin_tab.PNG"
            alt=""
            className="w-[20%]"
          />
        </div>
        <div className="absolute top-[7%] w-full flex items-center justify-evenly z-10 p-10 px-32 ">
          <img src="/images/animation/spin.gif" alt="" className=" w-[40%]" />
        </div>
        <div className="w-full flex items-center justify-evenly z-10 p-10 px-32 ">
          <img
            src="/images/desktop-section-2/spin_tab_2.PNG"
            alt=""
            className=" w-[80%] mt-44"
          />
        </div>
        <div className="w-full  flex justify-center items-center">
          <img
            src="/images/desktop-section-2/cards_tab1.PNG"
            alt=""
            className=" w-[80%] mt-44"
          />
        </div>
      </div>
    </>
  )
}

DesktopSection2.propTypes = {}

export default DesktopSection2
