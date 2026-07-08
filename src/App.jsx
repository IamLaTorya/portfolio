import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {

  return (
    <>
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
