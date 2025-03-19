import './App.css'
import './Header.css'
import './Navbar.css'
import './SectionChiSono.css'
import './SectionEsperienze.css'
import './SectionProgetti.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SectionContatti.css';


import { Header } from './components/Header'
import { SectionChiSono } from "./components/SectionChiSono";
import { SectionEsperienze } from "./components/SectionEsperienze";
import { SectionProgetti } from "./components/SectionProgetti";
import { SectionContatti } from "./components/SectionContatti";



function App() {

  return (
    <>
      <Header/>  
      <SectionChiSono />
      <SectionEsperienze />
      <SectionProgetti />
      <SectionContatti />
    </>
  )
}

export default App
