import './App.css'
import './Header.css'
import './Navbar.css'
import './SectionChiSono.css'
import './SectionEsperienze.css'





import { Header } from './components/Header'
import { SectionChiSono } from "./components/SectionChiSono";
import { SectionEsperienze } from "./components/SectionEsperienze";

function App() {

  return (
    <>
      <Header/>  
      <SectionChiSono />
      <SectionEsperienze />
    </>
  )
}

export default App
