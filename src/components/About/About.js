import AnchorLink from 'react-anchor-link-smooth-scroll';
import bioImage from '../../assets/images/marcelo-borrelli.jpg';

const About = () => {
  return (
    <div id="About" className="about container">
      <div className="content">
        <div className="photo-col">
          <img src={bioImage} alt="Marcelo Borrelli" />
        </div>
        <div className="content-col">
          <h3 className="sub-title">About</h3>
          <h2 className="section-title">Marcelo Borrelli</h2>
          <div className="divider"></div>
          <h4 className="title">Managing Director</h4>
          <h4 className="title">International Financial Advisor</h4>
          <p>Marcelo Borrelli has lived in Guatemala, Colombia, Dominican Republic, Argentina, Minnesota, New Mexico, and Texas before moving to Miami, Florida where he began his financial wealth management career at Morgan Stanley Dean Witter in 1999. After working in the financial services industry for 21 years, Mr. Borrelli decided to go independent and work under the name Borrelli Capital Managament. (***)</p>
          <p><span className="special">Specialty Area</span>
          <br/>
          Structure and tailor investment portfolios for U.S. and Non-U.S. clients.</p>
          <AnchorLink href="#Contact" offset='80'>Contact</AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default About;
