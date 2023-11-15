import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import Apartment from './components/Apartment';
import Form from './components/contactform/Form';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CustomAlert from './components/CustomAlert/CustomAlert';
import Hydrabad from './components/component2/Hydrabad';
import HydraFilter from './components/component2/HyderaCard/HydraFilter';
import { Route, Routes } from 'react-router-dom'
import Single from './components/SinglePageview/Single';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomAlert />
      <Header />
      <Home/>
        <About />
        <Projects />
        <Apartment />
        <Hydrabad />
        <HydraFilter />
      <Form />
      <Footer/>
      <Single/>
    </>
  )
}

export default App
