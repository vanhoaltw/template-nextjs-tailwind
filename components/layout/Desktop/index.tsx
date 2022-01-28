import React from 'react'
import Image from 'next/image'
import DesktopSection1 from './section-1'
import DesktopSection2 from './section-2'
function DesktopLayout() {
  return (
    <>
      <div className="block">
        <DesktopSection1 />
      </div>
      <div className="block">
        {/* <Section2 /> */}
        <DesktopSection2 />
      </div>
      <div className="block">{/* <Section3 /> */}</div>
    </>
  )
}
export default DesktopLayout
