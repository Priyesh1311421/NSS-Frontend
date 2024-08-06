import React from 'react';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Achievements from '../components/Achievements';
import Trips from '../components/Trips';
import UpcomingEvents from '../components/UpcomingEvents';
import Video from '../components/Video';
import Desk from '../components/Desk';
import VC from '../components/VC';

function HomePage() {
  return (
    <div className="Home">
        <Home />
        <UpcomingEvents/>
        <AboutUs />
        <VC/>
        <Video/>
        <Achievements />
    </div>
  );
}

export default HomePage;
