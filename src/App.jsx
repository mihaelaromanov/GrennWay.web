import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {
    return (
        <>
        <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="aboutus">
          <AboutUs />
        </div>

        <div id="services">
          <Services />
        </div>
      </main>

        <div id="contact">
          <Contact />
        </div>

      <Footer/>  
    </div>
        </>
    );
};

export default App;
