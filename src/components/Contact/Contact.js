import microsoftTeamsIcon from '../../assets/icons/microsoft-teams-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import mailIcon from '../../assets/icons/mail-icon.svg';
import locationIcon from '../../assets/icons/location-icon.svg';
import linkIcon from '../../assets/icons/link-icon.png';
import individualsForm from '../../assets/forms/ACCTQUESTIONSNGJNT.pdf';
import companiesForm from '../../assets/forms/CorpAccountQuestionnair&Docs.pdf';

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
              <a href="https://goo.gl/maps/G2XZsxsLasjgtvrF7" target="_blank" rel="noreferrer">
                <img src={locationIcon} alt="Address" />
                <span>1221 Brickell Ave, Penthouse<br/>Miami, FL 33131</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="onboarding-forms">
          <div className="wrapper">
            <h3 className="sub-title">Onboarding Forms</h3>
            <div className="form-buttons">
              <a className="button" href={individualsForm} target="_blank">Individuals <img src={linkIcon} alt="form-link"/></a>
              <a className="button" href={companiesForm} target="_blank">Companies <img src={linkIcon} alt="form-link"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
