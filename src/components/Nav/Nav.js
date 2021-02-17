import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/bcm-logo-dark@2x.png';

const Nav = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="header">
      <div className="logo" onClick={handleScrollTop}>
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
