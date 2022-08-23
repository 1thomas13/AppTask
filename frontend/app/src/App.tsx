import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Project } from './pages/Project';

function App() {

  const location = useLocation()

  const pageTransition: any = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  }

  return (
    <AnimatePresence>
    
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
            <Home/>
          </motion.div>} 
        />
        <Route path="/register" element={
          <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
            <Register/>
          </motion.div>} 
        />
        <Route path="/login" element={
          <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
            <Login/>
          </motion.div>} 
        />

        <Route path="/project" element={
          <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
            <Project/>
          </motion.div>} 
        />

        <Route path="*" element={
          <motion.div  initial='out' animate='in' exit='out' variants={pageTransition}>
            <Error404/>
          </motion.div>} 
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
