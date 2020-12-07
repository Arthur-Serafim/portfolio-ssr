import {
  Navigation,
  NavigationItems,
  NavigationLogo,
  NavigationLabel
} from '../styles/pages/NavbarStyles'
import { useRouter } from 'next/router'

export default function Navbar({ fullpageApi, active = false }) {
  const router = useRouter()

  function navigate(name: string, index: number) {
    if (router.pathname === '/about') {
      router.push(`/#${name}`)
    } else {
      fullpageApi.moveTo(name, index)
    }
  }

  return (
    <Navigation style={{ color: active ? '#35354e' : "#fff" }}>
      <NavigationLogo onClick={() => router.push('/')}>Arthur Serafim</NavigationLogo>
      <NavigationItems>
        <NavigationLabel onClick={() => navigate("About", 2)} style={{ color: active ? '#35354e' : "#fff" }}>About</NavigationLabel>
        <NavigationLabel onClick={() => navigate("MouseOne", 3)} style={{ color: active ? '#35354e' : "#fff" }}>Projects</NavigationLabel>
        <NavigationLabel onClick={() => navigate("Contact", 5)} style={{ color: active ? '#35354e' : "#fff" }}>Contact</NavigationLabel>
        <a
          href="https://drive.google.com/u/1/uc?id=19Ra4I0YQELRKNcanM6B8nDSq2qbqtq6B&export=download"
          target="_blank"
          rel="norel"
        >
          <NavigationLabel style={{ color: active ? '#35354e' : "#fff" }}>Resume</NavigationLabel>
        </a>
      </NavigationItems>
    </Navigation>
  )
}
