import React, { useEffect } from 'react'
import Header from '../header/Header'
import PropertyList from './PropertyList';
import { useState } from 'react';
import Carousel from '../Crousel/Carousel';
import Hero from '../Hero/Hero'
import { useLocation } from 'react-router-dom';
import { auth, storage} from "../firebaseConfig/firebaseConfig";
import { getDownloadURL,ref,listAll } from 'firebase/storage';
export default function Home() {
  const [property, setProperty] = useState([{}
  ]);
  const location = useLocation();
  const { state } = location;
  useEffect(()=>{
    fetch("/getItem").then(response=>response.json()
    ).then(data=>setProperty(data))
  },[])

  const [imageUrls, setImageUrls] = useState([]);

  const retrieveImages = async () => {
    const imagesRef = ref(storage, "images/"); // Assuming "images/" is your folder path
    try {
      const imagesList = await listAll(imagesRef);
      const urlsPromises = imagesList.items.map((itemRef) =>
        getDownloadURL(itemRef)
      );
      const urls = await Promise.all(urlsPromises);
      setImageUrls(urls);
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  };

  useEffect(() => {
    retrieveImages();
  }, []);

  // useEffect(() => {
  //   retrieveImage(); // Retrieve the image URL when the component mounts
  // }, []);

  
  return (
    <div style={{width:"100%"} }>
      <Hero/>
      <PropertyList property = {property} />
      <Carousel/>
   
    
    </div>
  )
}

 
