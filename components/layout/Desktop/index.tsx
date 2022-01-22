import React from 'react'
import Image from 'next/image'
import Section1 from './section-1'
function DesktopLayout() {
  return (
    <>
      <div className="block">
        <Section1 />
      </div>
      <div className="block">{/* <Section2 /> */}</div>
      <div className="block">{/* <Section3 /> */}</div>
    </>
  )
}
export default DesktopLayout
