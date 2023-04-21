import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Logo } from './components/Logo'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { AboutBanner } from './AboutBanner'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Banner />
            <Logo />
            <Intro />
          </>
        } />
        <Route path='about' element={
          <>
            <AboutBanner />
            <About />
          </>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
