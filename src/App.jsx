import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/Home';
import Navbar from './components/Header';
import Footer from './components/Footer';
// import Gallery from './Pages/Gallery'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<HomePage/>} />
        {/* <Route path='/Gallery' element = {<Gallery/>}/> */}
        <Route path='/home' element = {<HomePage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
