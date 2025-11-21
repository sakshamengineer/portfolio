import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import {HashRouter,Routes,Route,} from "react-router-dom";
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element = {<About/>}/>
          <Route path='/projects' element = {<Projects/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/skills' element = {<Skills/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}
