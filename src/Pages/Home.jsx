import React from 'react';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Achievements from '../components/Achievements';
import UpcomingEvents from '../components/UpcomingEvents';
import Video from '../components/Video';
import VC from '../components/VC';
import Coordinator from '../components/Coordinator';

function HomePage() {
  return (
    <div className="Home">
        <Home />
        <UpcomingEvents/>
        <AboutUs />
        <VC/>
        <Coordinator/>
        <Video/>
        <Achievements />
    </div>
  );
}

export default HomePage;
