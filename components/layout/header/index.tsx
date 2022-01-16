import Navbar from './../navbar/index'

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover absolute top-0 w-full h-full" />
      <div className="container relative mx-auto mt-8">
        <div className="h-[53rem]">
          <div className="bg-cover-bacground bg-cover  absolute top-0 w-full h-full">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  )
}
