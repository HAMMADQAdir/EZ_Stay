// import React,{useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './Property.css';
// import img1 from '../../imgs/dinning area.png'
// const Property = () => {

// const [modal,setmodal]=useState(false);
// const togglefun=()=>{
//   setmodal(!modal);
// }
//   return (
//     <div>
//       <div className="modal">
//       <div className="offcard" onClick={togglefun}>
//         <img src={img1} alt=""/>
//         <div className="details">
//             <p>for rent</p>
//             <p>3-bed aparment | 67sq.mt</p>
//             <p>3811 Ditmars Blvd Astorla, NY 11105</p>
//             <p><FontAwesomeIcon icon="fa-sharp fa-regular fa-sack-dollar" /> $894</p>
//         </div>
//         <div className="line">
//         </div>
//         <div className="commono">
//             <p>3 <FontAwesomeIcon icon="fa-solid fa-car"/></p>
//             <p>2 <FontAwesomeIcon icon="fa-solid fa-toilet"/></p>
//             <p>2 <FontAwesomeIcon icon="fa-solid fa-bed"/></p>
//         </div>
//         </div>
//       </div>
//       { modal && (
//              <div className="modalpop">
//              <div className="overlay" onClick={togglefun}>
//               <div className="flexingImgProp">
//                    <div className="imgSlider">
//                    </div>
//                    <div className="propDetails">
//                    </div>
//               </div>
//              </div>
//            </div>
//       )
//       }
//     </div>
//   )
// }
// export default Property;






import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Property.css';
// import img1 from '../../imgs/dinning area.png'; // Sample image, replace with actual images
// import img0 from '../../imgs/download (1).jpeg';
// import imgc from '../../imgs/cancel-146131_640.webp';
// import img2 from '../../imgs/download (2).jpeg'; // Sample image, replace with actual images
// import img3 from '../../imgs/download.jpeg'; // Sample image, replace with actual images
import e from '../images/ezstay.jpg'
const Property = () => {
  const [modal, setModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [e, e, e]; // Array of sample images, replace with actual images
  const propertyDetails = {
    status: 'for rent',
    description: '3-bed apartment | 67 sq.mt',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    price: '$894',
    amenities: {
      cars: 3,
      toilets: 2,
      beds: 2
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="modal">
        <div className="offcard" onClick={toggleModal}>
          <img src={e} alt="" />
          <div className="details">
            <p>{propertyDetails.status}</p>
            <p>{propertyDetails.description}</p>
            <p>{propertyDetails.address}</p>
            <p><i class="fa-solid fa-dollar-sign"></i><FontAwesomeIcon icon="fa-sharp fa-regular fa-sack-dollar" /> {propertyDetails.price}</p>
          </div>
          <div className="line"></div>
          <div className="commono">
            <p>{propertyDetails.amenities.cars} <i class="fa-solid fa-car"></i></p>
            <p>{propertyDetails.amenities.toilets} <i class="fa-solid fa-toilet"></i></p>
            <p>{propertyDetails.amenities.beds} <i class="fa-solid fa-bed"></i></p>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modalpop">
          <div className="overlay">
            <div className="cancle">
              <img src={e} alt="" onClick={toggleModal} />
            </div>
            <div className="flexingImgProp">
              <div className="imgSlider">
                <img src={images[currentImageIndex]} alt="" />
                <div className="navigation">
                  <button onClick={prevImage}><i class="fa-solid fa-backward"></i></button>
                  <button onClick={nextImage}><i class="fa-solid fa-chevron-right"></i></button>
                </div>
              </div>
              <div className="propDetails">
                <p>{propertyDetails.status}</p>
                <p>{propertyDetails.description}</p>
                <p>{propertyDetails.address}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> {propertyDetails.price}</p>
                {/* Add owner details */}
                <div className="ownerDetails">
                  <p>Owner: John Doe</p>
                  <p>Contact: +1234567890</p>
                  <p>Address: 123 Main St, Anytown, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
