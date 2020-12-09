import {
  Navigation,
  NavigationItems,
  NavigationLogo,
  NavigationLabel
} from '../styles/pages/NavbarStyles'
import { useRouter } from 'next/router'

export default function Navbar({ fullpageApi }) {
  const router = useRouter()

  function navigate(name: string, index: number) {
    if (router.pathname !== '/') {
      router.push(`/#${name}`)
    } else {
      fullpageApi.moveTo(name, index)
    }
  }

  return (
    <Navigation>
      <NavigationLogo onClick={() => router.push('/')}>
        Arthur Serafim
      </NavigationLogo>
      <NavigationItems>
        <NavigationLabel onClick={() => navigate('About', 2)}>
          About
        </NavigationLabel>
        <NavigationLabel onClick={() => navigate('MouseOne', 3)}>
          My Work
        </NavigationLabel>
        <NavigationLabel onClick={() => navigate('Contact', 4)}>
          Contact
        </NavigationLabel>
        <a
          href="https://drive.google.com/u/1/uc?id=19Ra4I0YQELRKNcanM6B8nDSq2qbqtq6B&export=download"
          target="_blank"
          rel="norel"
        >
          <NavigationLabel>Resume</NavigationLabel>
        </a>
      </NavigationItems>
    </Navigation>
  )
}
