import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/aboutme/About';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header /> 
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
