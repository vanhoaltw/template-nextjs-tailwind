import React from 'react'
import Image from 'next/image'
import Section2 from './Mobile/section-2'
import Section1 from './Mobile/Section1'
function MobileLayout() {
  return (
    <div className="block">
      {/* section-1 */}
      <Section1 />
      <Section2 />
    </div>
  )
}
export default MobileLayout
