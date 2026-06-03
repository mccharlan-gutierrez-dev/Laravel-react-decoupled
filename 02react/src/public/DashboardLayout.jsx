import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    const navLinks = [
        {label: "Dashboard", link: "dashboard"},
        {label: "Profile", link: "profile"},
    ];
    const authLinks = [
    {label: "Register", link: "/register"},
    {label: "Login", link: "/login"},

  ];
  return (
    <>
    <Navbar navLinks={navLinks} authLinks={authLinks}/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default DashboardLayout