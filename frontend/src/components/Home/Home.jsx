import React, { useEffect } from 'react'
import Header from '../header/Header'
import PropertyList from './PropertyList';
import { useState } from 'react';
import Carousel from '../Crousel/Carousel';
import Hero from '../Hero/Hero'
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [property, setProperty] = useState([{}
  ]);
  const location = useLocation();
  const { state } = location;
  useEffect(()=>{
    fetch("/getItem").then(response=>response.json()
    ).then(data=>setProperty(data))
  },[])



  
  return (
    <div style={{width:"100%"} }>
      <Hero/>
      <PropertyList property = {property}/>
      <Carousel/>
   
    
    </div>
  )
}

 
