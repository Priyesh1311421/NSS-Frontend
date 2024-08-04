import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Achievements from '../components/Achievements';
import ContactUs from '../components/ContactUs';
import Trips from '../components/Trips';
import Footer from '../components/Footer';
import UpcomingEvents from '../components/UpcomingEvents';
import Video from '../components/Video';
import Navbar from '../components/Header';
import ImageGallery from '../components/ImageGallery';

function HomePage() {
  return (
    <div className="Home">
        <Home />
        <UpcomingEvents/>
        <AboutUs />
        <Video/>
        <Achievements />
        <Trips />
    </div>
  );
}

export default HomePage;
