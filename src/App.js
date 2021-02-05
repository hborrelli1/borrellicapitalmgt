import whatsApp from './whatsApp.svg';
import mail from './Mail.svg';
import linkedin from './LinkedIn.svg';
import logo from './BCM-Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="Borrelli Capital Management" />
        <h1>Were doing some maintenance right now... <br/>Check back later!</h1>
        <div className="divider"></div>
        <div id="About">
          <h2>Marcelo Borrelli</h2>
          <div className="contact-links">
            <a href="tel:3057231684"><img src={whatsApp} alt="Phone" /></a>
            <a href="mailto:marcelo.borrelli@insigneo.com"><img src={mail} alt="Email" /></a>
            <a href="https://www.linkedin.com/in/marcelo-b-7a771a121/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
