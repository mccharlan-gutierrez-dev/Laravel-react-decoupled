import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
  const {user} = useAuth();

    const navLinks = [
        {label: "Dashboard", link: "dashboard"},
        {label: "Profile", link: "profile"},
    ];
    
  return (
    <>
    <Navbar navLinks={navLinks} user={user} />
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default DashboardLayout