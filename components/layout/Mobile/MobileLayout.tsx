import React from 'react'
import Image from 'next/image'
import Section2 from './section-2'
import Section1 from './Section1'
import Section3 from './Section3'
function MobileLayout() {
  return (
    <>
      <div className="block">
        {/* section-1 */}
        <Section1 />
      </div>
      <div className="block">
        <Section2 />
      </div>
      <div className="block">
        <Section3 />
      </div>
    </>
  )
}
export default MobileLayout
