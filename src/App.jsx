import './App.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Logo } from './components/Logo'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
// import homeBG from './assets/IMG_6701.jpg'
import homeBG from './assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'
import aboutBG from './assets/the-travel-nook-2FoqQ0EPwLg-unsplash.jpg'
// import contactBG from './assets/vitaly-sacred-CF33GT7iM9c-unsplash.jpg'
import destinationsBG from './assets/mike-arney-yRyZzxolfSs-unsplash.jpg'
import contactBG2 from './assets/natalya-zaritskaya-SIOdjcYotms-unsplash.jpg'
import { Contact } from './components/Contact'
import { Destinations } from './Destinations'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Banner image={homeBG}  />
            <Logo />
            <Intro />
          </>
        } />
        <Route path='about' element={
          <>
            <Banner image={aboutBG} />
            <About />
          </>
        } />
         <Route path='contact' element={
          <>
            <Banner image={contactBG2} />
            <Contact  />
          </>
        } />
        <Route path='destinations' element={
          <>
            <Banner image={destinationsBG} />
            <Destinations  />
          </>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
