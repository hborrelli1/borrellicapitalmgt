import LinkedIn from '../../assets/LinkedIn.svg';
import Mail from '../../assets/Mail.svg';
import logo from '../../assets/logo.svg';
import whatsApp from '../../assets/whatsApp.svg';

const Contact = () => {
  return (
    <div className="contact container">
      <div className="section-header">
        <h3>Contact</h3>
        <h2>Marcelo Borrelli</h2>
      </div>
      <div className="contact-info">
        <ul>
          <li>
            <img src={whatsApp} alt="WhatsApp Business" />
            <a href="" target="_blank" rel="noreferrer">+1 (305) 723-1684</a>
          </li>
          <li>
            <img src={LinkedIn} alt="LinkedIn" />
            <a href="mailto:marcelo.borrelli@insigneo.com" target="_blank" rel="noreferrer">marcelo.borrelli@insigneo.com</a>
          </li>
          <li>
            <img src={Mail} alt="Email" />
            <a href="https://www.linkedin.com/in/marcelo-b-7a771a121/" target="_blank" rel="noreferrer">linkedin.com/in/marcelo-b-7a771a121/</a>
          </li>
          <li>
            <img src={logo} alt="Address" />
            <p>
              777 Brickell Ave, 10th FL<br/>
              Miami, FL 33131
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;
