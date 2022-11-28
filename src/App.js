import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import Multi from './components/multipurpose/multi';
import Motion from './components/motion/motion';
import Landing from './components/LandingPages/landing';
import Features from './components/features/Features';
import Envato from './components/envato/envato';
import Footer from './components/Footer/Footer';


function App() {


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

    </div>

  )
}

export default App
