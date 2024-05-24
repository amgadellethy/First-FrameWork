import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Heading from './components/Heading/Heading'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Layout from './components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        {path : "Contact" , element : <Contact />}
    ]}
  ])
  return (
    <>
      <RouterProvider router = {routes} />

    </>
  )
}
