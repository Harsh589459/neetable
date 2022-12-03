import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import Multi from './components/multipurpose/multi';
import Motion from './components/motion/motion';
import Landing from './components/LandingPages/landing';
import Features from './components/features/Features';
import Envato from './components/envato/envato';
import Footer from './components/Footer/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function App() {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }



  return (


    <div className='App' id='light'>
      <div className='part-1'>
        <div className='fixed'>
          <Envato />
          <Navbar />
        </div>

        <Multi />
      </div>
      <Motion />
      <Landing />
      <Features />

      <hr style={{ marginTop: 80 }} />
      <Footer />

      <div onClick={() => topFunction()} id='myBtn' className='top-btn'>
        <KeyboardArrowUpIcon />


      </div>



    </div>

  )
}

export default App
