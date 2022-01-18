import { BrowserView, MobileView } from 'react-device-detect'
import MobileLayout from '../components/layout/MobileLayout'
export default function HomePage() {
  return (
    <>
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <MobileLayout></MobileLayout>
      </MobileView>
    </>
  )
}
