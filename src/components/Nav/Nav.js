import logo from '../../assets/BCM-Logo.svg';

const Nav = () => {
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="Borrelli Capital Management" />
      </div>
      <nav>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </nav>
    </div>
  )
}

export default Nav;
