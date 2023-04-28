import './App.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Logo } from './components/Logo'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import homeBG from './assets/homeBackground.png'
import aboutBG from './assets/alonso-reyes-Ca4XZM3xABg-unsplash.jpg'
import destinationsBG from './assets/sean-ferigan-LKvUMKD-8k4-unsplash.jpg'
import contactBG2 from './assets/fernando-jorge-cRQYPtbLLew-unsplash.jpg'
// import contactBG2 from './assets/sean-ferigan-LKvUMKD-8k4-unsplash.jpg'
import { Contact } from './components/Contact'
import { Destinations } from './Destinations'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Banner image={homeBG} />
            <Logo />
            <Intro />
          </>
        } />
        <Route path='about' element={
          <>
            <Banner image={aboutBG} />
            <Logo />
            <About />
          </>
        } />
        <Route path='contact' element={
          <>
            <Banner image={contactBG2} />
            <Contact />
          </>
        } />
        <Route path='destinations' element={
          <>
            <Banner image={destinationsBG} />
            <Logo />
            <Destinations />
          </>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
