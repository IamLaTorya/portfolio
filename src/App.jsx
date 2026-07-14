// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
