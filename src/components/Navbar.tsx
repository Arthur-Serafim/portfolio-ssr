import {
  Navigation,
  NavigationItems,
  NavigationLogo,
  NavigationLabel
} from "../styles/pages/NavbarStyles";

import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <Navigation>
      <NavigationLogo>
        Arthur Serafim
      </NavigationLogo>
      <NavigationItems>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <NavigationLabel>
            Projects
          </NavigationLabel>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <NavigationLabel>
            About
          </NavigationLabel>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <NavigationLabel>
            Contact
          </NavigationLabel>
        </Link>
        <a href="https://drive.google.com/u/1/uc?id=19Ra4I0YQELRKNcanM6B8nDSq2qbqtq6B&export=download" target="_blank" rel="norel">
          <NavigationLabel>
            Resume
          </NavigationLabel>
        </a>
      </NavigationItems>
    </Navigation>
  )
}