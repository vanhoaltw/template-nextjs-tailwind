import React from 'react'
import Image from 'next/image'
function MobileLayout() {
  return (
    <div className="block">
      {/* section-1 */}
      <div className="bg-landing-background bg-contain bg-cover h-screen">
        <div className="container h-5/6 p-8">
          {/* Khung */}
          <div className="bg-border-section-1 bg-cover  h-full  relative ">
            <div className="absolute top-7 left-11 flex justify-between w-64">
              <button className="bg-transparent">
                <Image
                  src="/images/buttons/home.png"
                  alt="Tappy Logo"
                  width={70}
                  height={30}
                />
              </button>
              <button className="bg-transparent">
                <Image
                  src="/images/buttons/pitch.png"
                  alt="Tappy Logo"
                  width={70}
                  height={30}
                />
              </button>
            </div>
            <div className="absolute top-20 left-28 ">
              <Image
                src="/images/logo.png"
                alt="Tappy Logo"
                width={125}
                height={125}
              />
            </div>
            <div className="absolute top-40 left-0 ">
              <Image
                src="/images/dautay.png"
                alt="Picture of the author"
                width={100}
                height={150}
              />
            </div>
            <div className="absolute bottom-40 right-0 ">
              <Image
                src="/images/cucai.png"
                alt="Picture of the author"
                width={100}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MobileLayout
