import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/Home';
import Navbar from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Gallery from './Pages/Gallery'
import Notices from './Pages/Notices';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<HomePage/>} />
        <Route path='/Gallery' element = {<Gallery/>}/>
        <Route path='/home' element = {<HomePage/>} />
        <Route path='/about' element = {<About/>}/>
        <Route path='/notices' element = {<Notices/>} />

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
