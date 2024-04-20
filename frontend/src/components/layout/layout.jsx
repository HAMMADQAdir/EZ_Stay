import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {Outlet} from "react-router-dom"
import Carousel from '../Crousel/Carousel'
export default function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>

        <Footer/>    
    </>
  )
}


