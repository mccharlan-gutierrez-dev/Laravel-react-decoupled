import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Notfound from './pages/Notfound.jsx'
import Register from './auth/Register.jsx'
import Login from './auth/Login.jsx'
import PublicLayout from './public/PublicLayout.jsx'
import Rooms from './pages/Rooms.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Profile from './dashboard/profile.jsx'
import DashboardLayout from './public/DashboardLayout.jsx'
import Room from './pages/Room.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <AuthProvider>
      <Routes>
      <Route>
        <Route path='not-found' element={<Notfound/>} />
      </Route>

      <Route element = {<PublicLayout/>}>
        <Route path='/' element = {<Home/>} />
        <Route path='contact' element = {<Contact/>} />
        <Route path='about' element = {<About/>} />
        <Route path='rooms' element = {<Rooms/>} />
        <Route path='rooms/:roomId' element = {<Room/>} />
        <Route path='notfound' element = {<Notfound/>} />
        <Route path='register' element = {<Register/>} />
        <Route path='login' element = {<Login/>} />
      </Route>

      <Route element = {<DashboardLayout/>}>
        <Route path='dashboard' element = {<Dashboard/>} />
        <Route path='profile' element = {<Profile/>} />
      </Route>

    </Routes>
    </AuthProvider>
    
    </BrowserRouter>

  </StrictMode>,
)

