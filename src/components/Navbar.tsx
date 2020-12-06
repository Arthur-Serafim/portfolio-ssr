import {
  Navigation,
  NavigationItems,
  NavigationLogo,
  NavigationLabel
} from '../styles/pages/NavbarStyles'

export default function Navbar({ fullpageApi }) {
  return (
    <Navigation>
      <NavigationLogo>Arthur Serafim</NavigationLogo>
      <NavigationItems>
        <NavigationLabel onClick={() => fullpageApi.moveTo("About", 2)}>About</NavigationLabel>
        <NavigationLabel onClick={() => fullpageApi.moveTo("MouseOne", 3)}>Projects</NavigationLabel>
        <NavigationLabel onClick={() => fullpageApi.moveTo("Contact", 5)}>Contact</NavigationLabel>
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
