import logo from '../../assets/bcm-logo-dark.svg';

const Nav = () => {
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="Borrelli Capital Management" />
      </div>
      <nav>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
      </nav>
    </div>
  )
}

export default Nav;
