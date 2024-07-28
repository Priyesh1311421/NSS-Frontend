import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Achievements from './components/Achievements';
import ContactUs from './components/ContactUs';
import Trips from './components/Trips';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16">
        <Home />
        <AboutUs />
        <Achievements />
        <UpcomingEvents/>
        <ContactUs />
        <Trips />
      </main>
      <Footer />
    </div>
  );
}

export default App;
