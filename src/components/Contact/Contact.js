import microsoftTeamsIcon from '../../assets/icons/microsoft-teams-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import mailIcon from '../../assets/icons/mail-icon.svg';
import locationIcon from '../../assets/icons/location-icon.svg';

const Contact = () => {
  return (
    <div id="Contact" className="contact container">
      <div className="content">
        <div className="section-header">
          <h3 className="sub-title">Contact</h3>
          <h2 className="section-title">Marcelo Borrelli</h2>
        </div>
        <div className="contact-info">
          <ul>
            <li className="ms-teams">
              <span>
                <img src={microsoftTeamsIcon} alt="Microsoft Teams Number" title="Microsoft Teams Number" />
                <span>+1 (305)-808-3911</span>
              </span>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marcelo-borrelli-bcm/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:marcelo.borrelli@insigneo.com" target="_blank" rel="noreferrer">
                <img src={mailIcon} alt="Email" />
                <span>marcelo.borrelli@insigneo.com</span>
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/FPoqxpsSFbMpCEpg8" target="_blank" rel="noreferrer">
                <img src={locationIcon} alt="Address" />
                <span>777 Brickell Ave, 10th FL<br/>Miami, FL 33131</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;
