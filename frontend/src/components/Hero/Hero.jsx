import React, { useState, useEffect, useRef } from 'react';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

import './Hero.css'; // Import CSS file for styling
import logo from "./logo.jpg"; // Import logo image

const HeroSection = () => {
  const texts = [
    'Welcome to our Rental Website!',
    'Find your perfect Rental Property here!',
    'Browse our wide range of Rental options!',
  ];
  
  const images = [
    pic1,
    pic2,
    pic3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTextFullyDisplayed, setIsTextFullyDisplayed] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true); // Track scrolling direction
  const lastScrollY = useRef(0);

  const heroRef = useRef(null); // Create a reference to the hero section element
  const imageRef = useRef(null); // Create a reference to the hero image element
  const logoRef = useRef(null); // Create a reference to the logo element

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      setCharIndex(0);
      setIsDeleting(false);
      setDisplayedText('');
      setIsTextFullyDisplayed(false);
    }, 5000); // Change rotation speed as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let typingTimeout;
    let animationTimeout;

    if (!isDeleting && texts[currentIndex] && texts[currentIndex].length > 0 && charIndex < texts[currentIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + texts[currentIndex][charIndex]);
        setCharIndex(prevIndex => prevIndex + 1);
      }, 50); // Change typing speed as needed
    } else if (!isDeleting && texts[currentIndex] && texts[currentIndex].length > 0 && charIndex === texts[currentIndex].length && !isTextFullyDisplayed) {
      setIsTextFullyDisplayed(true);
      animationTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Delay before starting deletion
    } else if (!isDeleting && isTextFullyDisplayed) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Delay after complete typing
    } else if (isDeleting && charIndex >= 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(prevText => prevText.slice(0, -1));
        setCharIndex(prevIndex => prevIndex - 1);
      }, 50); // Change deleting speed as needed
    } else {
      setIsDeleting(false);
      setCharIndex(0);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(animationTimeout);
    };
  }, [charIndex, currentIndex, isDeleting, isTextFullyDisplayed, texts]);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      const logoElement = logoRef.current;

      if (imageElement && logoElement) {
        const imageBottom = imageElement.getBoundingClientRect().bottom;
        const logoTop = logoElement.getBoundingClientRect().top;

        // Check scrolling direction
        const scrollingDown = window.scrollY > lastScrollY.current;
        lastScrollY.current = window.scrollY;

        if (scrollingDown) {
          setIsScrollingDown(true);
        } else {
          setIsScrollingDown(false);
        }

        if (imageBottom < logoTop && scrollingDown) {
          // Add class to display logo popup animation when user scrolls past the hero image
          logoElement.classList.add('logo-popup');
        } else {
          // Remove class when user scrolls back to hero image or scrolls upwards
          logoElement.classList.remove('logo-popup');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-section" ref={heroRef}>
      <img src={images[currentIndex]} alt="Hero" className="hero-image" ref={imageRef} />
      <h1 className="hero-text">{displayedText}</h1>
      <img src={logo} alt="Logo" className="logo" ref={logoRef} />
    </div>
  );
};

export default HeroSection;
