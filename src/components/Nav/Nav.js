import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/bcm-logo-dark.svg';

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Borrelli Capital Management" />
      </div>
      <nav>
        <AnchorLink href="#About" offset='80'>About</AnchorLink>
        <AnchorLink href="#Services" offset='80'>Services</AnchorLink>
        <AnchorLink href="#Contact" offset='80'>Contact</AnchorLink>
      </nav>
    </div>
  )
}

export default Nav;
