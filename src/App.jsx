import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Logo } from './components/Logo'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Banner />
    <Logo />
    <Intro />
    <Footer />
    </>
  )
}

export default App
