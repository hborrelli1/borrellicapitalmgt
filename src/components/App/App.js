import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Disclaimers from '../Disclaimers/Disclaimers';
import Footer from '../Footer/Footer';

// import whatsApp from '../../assets/whatsApp.svg';
// import mail from '../../assets/Mail.svg';
// import linkedin from '../../assets/LinkedIn.svg';
// import logo from '../../assets/BCM-Logo.svg';
import '../../scss/Application.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Disclaimers />
      <Footer />
    </div>
  );
}

export default App;
