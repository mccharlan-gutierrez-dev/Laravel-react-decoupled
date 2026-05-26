import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    let navLinks = [
        {label: "Dashboard", link: "dashboard"},
        {label: "Profile", link: "profile"},
    ];
  return (
    <>
    <Navbar navLinks={navLinks}/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default DashboardLayout