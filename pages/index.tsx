import { BrowserView, MobileView } from 'react-device-detect'
import DesktopLayout from '../components/layout/Desktop'
import MobileLayout from '../components/layout/Mobile/MobileLayout'
import useScreen from '../lib/hooks/useScreen'
export default function HomePage() {
  const sm = useScreen('sm')
  if (sm) return <DesktopLayout></DesktopLayout>
  else return <MobileLayout></MobileLayout>
}
