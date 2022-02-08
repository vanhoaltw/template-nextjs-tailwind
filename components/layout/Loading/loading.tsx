import React from 'react'
import Image from 'next/image'
function Loading() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <img src="/images/animation/loading.gif" alt="" />
      </div>
    </>
  )
}
export default Loading
