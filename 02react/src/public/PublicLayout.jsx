import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const PublicLayout = () => {
    const navLinks = [
    {label: "Home", link: "/"},
    {label: "About", link: "/about"},
    {label: "Contact", link: "/contact"},

  ];
  const authLinks = [
    {label: "Register", link: "/register"},
    {label: "Login", link: "/login"},

  ];
  return (
    <>
    <Navbar navLinks = {navLinks} authLinks={authLinks}/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default PublicLayout