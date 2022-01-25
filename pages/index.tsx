import DesktopLayout from '../components/layout/Desktop'
import MobileLayout from '../components/layout/Mobile/MobileLayout'
import useScreen from '../lib/hooks/useScreen'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
    })
  }, [])

  const sm = useScreen('sm')
  if (sm) return <DesktopLayout></DesktopLayout>
  else return <MobileLayout></MobileLayout>
}
