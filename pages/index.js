import DesktopLayout from '../components/layout/Desktop'
import MobileLayout from '../components/layout/Mobile/MobileLayout'
import useScreen from '../lib/hooks/useScreen'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Loading from '../components/layout/Loading/loading'

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
    })
    document.addEventListener('readystatechange', (event) => {
      // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
      if (event.target?.readyState === 'complete') {
        setLoaded(true)
      }
    })
  }, [])
  if (loaded) console.log('loaded')
  const sm = useScreen('sm')
  // if (!loaded) return <Loading></Loading>else
  if (sm) return <DesktopLayout></DesktopLayout>
  else return <MobileLayout></MobileLayout>
}
