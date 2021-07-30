import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import CustodyClearing from '../CustodyClearing/CustodyClearing';
import Disclaimers from '../Disclaimers/Disclaimers';
import Footer from '../Footer/Footer';

import '../../scss/Application.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Contact />
      <CustodyClearing />
      <Disclaimers />
      <Footer />
    </div>
  );
}

export default App;
