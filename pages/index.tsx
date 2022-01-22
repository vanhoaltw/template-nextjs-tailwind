import { BrowserView, MobileView } from 'react-device-detect'
import DesktopLayout from '../components/layout/Desktop'
import MobileLayout from '../components/layout/Mobile/MobileLayout'
export default function HomePage() {
  return (
    <>
      <BrowserView>{/* <DesktopLayout></DesktopLayout> */}</BrowserView>
      <MobileView>
        <MobileLayout></MobileLayout>
      </MobileView>
    </>
  )
}
