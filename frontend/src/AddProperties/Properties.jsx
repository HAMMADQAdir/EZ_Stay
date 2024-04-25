import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth, storage } from "../components/firebaseConfig/firebaseConfig";
import { ref, uploadBytes,onAuthStateChanged } from "firebase/storage";
import Loader from "../components/Loader/Loader";



export default function AddProperty() {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [imgId, setImgId] = useState(0); 
const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
       setCurrentUser(user.uid)
      
      
       setLoggedIn(true);
        setLoggedIn(true);
      } else {
        setCurrentUser(null);
        setLoggedIn(false);
        console.log("in uidnot defined");
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   async function fetchItemCount() {
  //     try {
  //       console.log("enter in fetch0");
  //       const response = await fetch("http://localhost:1122/getItemCount");
  //       const data = await response.json();
  //       setImgId(data); // Update imgId state with the fetched data\
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching item count:", error);
  //     }
  //   }

  //   fetchItemCount(); // Fetch item count when the component mounts
  // }, []);
  
   
  

  // console.log(imgId);
  const [formData, setFormData] = useState({
    itemId:0,
    userId:"",
    title: "",
    Locality: "",
    Street:"",
    state:"",
    Pincode:"",
    category: "Flat",
    type: "",
    price: "",
    description: "",
    image: null,

    pg_timing: "",
    emminities: "",
    pg_mess: "",
    mess_timing: "",

    size: "",
    floors: 0,
  });

 

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    // For file input, use event.target.files[0] to get the selected file
    const newValue = type === "file" ? event.target.files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    // imgId++;
  //   fetch("/getItemCount").then(response=>response.json()
  // ).then(data=>setImgId(data)).catch(err=>console.log(err))
  let v = await fetch('/getItemCount').then(response=>response.json()) ;
  console.log(v.length);
 
// axios.get('http://localhost:1122/getItemCount')
// .then(res=>console.log(res))
// .catch(err=>console.log("baklle balle"))

   setTimeout(()=>{
    setImgId(v);
    formData.userId = currentUser
    formData.itemId = v.length+9;
  console.log("this is desc "+formData.description)
      axios.post("http://localhost:1122/properties", formData)
      .then((result) => console.log("   s "))
      .catch((err) => console.log("err"));
      // console.log(formData);

   },2000);
    const file = formData.image;
  
    setTimeout(()=>{
      let id = (v.length + 9).toString();
      const storageRef = ref(storage, `images/${id}`);

     uploadBytes(storageRef, file).then((result) =>
      console.log("Image uploaded to Firebase Storage successfully.")
    ).catch(err=>console.log("Image aslsdhalifbsalicuploaded to Firebase Storage successfully.")
  ).finally( setLoading(false))
    },3000);
  };

  const renderSpecificFields = () => {
    const { category } = formData;

    if (category === "PG") {
      return (
        <>
          <div className="mb-3">
            <label htmlFor="pg_timing">PG Timing:</label>
            <input
              type="text"
              name="pg_timing"
              value={formData.pg_timing}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter PG Timing"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pg_timing">emminities</label>
            <input
              type="text"
              name="pg_timing"
              value={formData.emminities}
              onChange={handleInputChange}
              className="form-control"
              placeholder="emminities"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pg_timing">pg_mess</label>
            <input
              type="text"
              name="pg_mess"
              value={formData.pg_mess}
              onChange={handleInputChange}
              className="form-control"
              placeholder="pg_mess"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mess_timing">mess_timing</label>
            <input
              type="text"
              name="mess_timing"
              value={formData.pg_mess}
              onChange={handleInputChange}
              className="form-control"
              placeholder="mess_timing"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </>
      );
    }

    if (category === "House") {
      return (
        <>
          <div className="mb-3">
            <label htmlFor="size">Size:</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Size"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="floors">Floors:</label>
            <input
              type="number"
              name="floors"
              value={formData.floors}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Floors"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </>
      );
    }

    // Default case (Flat category)
    return (
      <>
        <div className="mb-3">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Price"
          />
        </div>
       
        <div className="mb-3">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </>
    );
  };
  return (
    <div className="backGround" style={{ marginTop: "100px" }}>
      <div
        className="form_container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          height: "calc(100vh - 100)",
          width: "100vw",
          flexWrap: "nowrap",
          margin: "10px",
          flexDirection: "column",
        }}
      >
        {loading ? <Loader/>:
          <form onSubmit={register} style={{ width: "40%" }} >
            <h3>Add Property</h3>

            {/* Category dropdown */}
            <div className="mb-3">
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="Flat">Flat</option>
                <option value="PG">PG</option>
                <option value="House">House</option>
              </select>
            </div>
           
            <div className="form-group">
              <label htmlFor="Locality">Locality:</label>
              <input
                type="text"
                name="Locality"
                value={formData.Locality}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter locality"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="Street">Street:</label>
              <input
                type="text"
                name="Street"
                value={formData.Street}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Street"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">state:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter state"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Pincode">Pincode:</label>
              <input
                type="text"
                name="Pincode"
                value={formData.Pincode}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Pincode"
                required
              />
            </div>
            <div className="mb-3">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Description"
          />
        </div>


           

            
            {/* Render specific fields based on category */}
            {renderSpecificFields()}

            {/* Submit button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Add Property
              </button>
            </div>
          </form>
}
      </div>
      </div>
  );
}
// import React, { useState, useEffect } from "react";
// import "./Properties.css";
// import axios from "axios";
// import { auth } from "../components/firebaseConfig/firebaseConfig";
// import { getStorage , ref, uploadBytes} from 'firebase/storage'
// function Properties() {
//   let imgId = 0;
//   const [properties, setProperties] = useState([]);
//   const [formData, setformData] = useState({
//     title: "",
//     Locality: "",
//     category: "Flat",
//     type: "Rent",
//     price: "",
//     description: "",
//     image: null,
//     pg_timing: "",
//     emminities: "",
//     pg_mess: "",
//     mess_timing: "",
//     // adding for house
//     size: "",
//     floors: 0,
//   });

//   const [updatingPropertyId, setUpdatingPropertyId] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setformData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     console.log(formData)
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setformData((prevState) => ({
//       ...prevState,
//       image: file,
//     }));
//   };

//   const handleAddProperty = async (e) => {
//     e.preventDefault();
//     if (
//       !formData.title ||
//       !formData.price ||
//       !formData.Locality ||
//       !formData.description ||
//       !formData.image
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }
// console.log("aa gya insert function main")
//     try {

//       console.log("aa gya api function main")
//       console.log(formData)
//      if(formData){ const response = await axios.post("http://localhost:1122/prpty", formData).then((response)=>{
//       console.log("gotit")
//       alert("added");
//     }).catch((err)=>{console.log(err.message)})}
//       // const id = properties.length + 1;
//       // setProperties((prevState) => [
//       //   ...prevState,
//       //   { ...formData, id, imageData: response.data.imageData },
//       // ]);
//       setformData({
//         title: "",
//         Locality: "",
//         category: "Flat",
//         type: "Rent",
//         price: "",
//         description: "",
//         image: null,
//         pg_timing: "",
//         emminities: "",
//         pg_mess: "",
//         mess_timing: "",
//         size: "",
//         floors: 0,
//       });
//     } catch (error) {
//       console.error("Error adding property:", error);
//     }
//   };

//   const handleDeleteProperty = async (id) => {
//     // try {
//     //   await axios.delete(`/deleteItem/${id}`);
//     //   const updatedProperties = properties.filter((property) => property.id !== id);
//     //   setProperties(updatedProperties);
//     // } catch (error) {
//     //   console.error("Error deleting property:", error);
//     // }
//   };

//   const handleUpdateProperty = (id) => {
//     setUpdatingPropertyId(id);
//     const propertyToUpdate = properties.find((property) => property.id === id);
//     setformData(propertyToUpdate);
//   };

//   const handleFormSubmit = async () => {
//     try {

//       const updatedProperties = properties.map((property) => {
//         if (property.id === formData.id) {
//           return formData;
//         }
//         return property;
//       });
//       setProperties(updatedProperties);
//       setUpdatingPropertyId(null);
//       setformData({
//         title: "",
//         Locality: "",
//         category: "Flat",
//         type: "Rent",
//         price: "",
//         description: "",
//         image: null,
//         pg_timing: "",
//         emminities: "",
//         pg_mess: "",
//         mess_timing: "",
//         size: "",
//         floors: 0,
//       });
// // uploading image

//     } catch (error) {
//       console.error("Error updating property:", error);
//     }

//     const handleUploadeImageToFirebase = (e)=>{
//       imgId++;
//       let file =
//       const storage = getStorage();
//       const imagesRef = ref(storage, `images/${imgId}`);
//       const uploadTask = uploadBytes(imagesRef, file);

//      }

//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h2>Add New Property</h2>
//         <form onSubmit={ updatingPropertyId ? handleFormSubmit :(e)=>{handleAddProperty(e)}}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="Locality"
//             placeholder="Location"
//             value={formData.Locality}
//             onChange={handleInputChange}
//             required
//           />
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="PG">PG</option>
//             <option value="Flat">Flat</option>
//             <option value="House">House</option>
//           </select>
//           <select
//             name="type"
//             value={formData.type}
//             onChange={handleInputChange}
//             disabled={formData.category === "PG"}
//           >
//             <option value="Rent">Rent</option>
//             {formData.category !== "PG" && (
//               <option value="Sell">Sell</option>
//             )}
//           </select>
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleInputChange}
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload}
//             accept="image/*"
//             required
//           />
//           {formData.category === "PG" && (
//             <div>
//               <input
//                 type="text"
//                 name="pg_timing"
//                 placeholder="PG Timing"
//                 value={formData.pg_timing}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="emminities"
//                 placeholder="Emminities"
//                 value={formData.emminities}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="pg_mess"
//                 placeholder="PG Mess"
//                 value={formData.pg_mess}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="mess_timing"
//                 placeholder="Mess Timing"
//                 value={formData.mess_timing}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           )}
//           {/* // for flat */}
//           {formData.category === "Flat" && (
//             <div>
//               <input
//                 type="number"
//                 name="size"
//                 placeholder="Size"
//                 value={formData.size}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="floors"
//                 placeholder="Emminities"
//                 value={formData.floors}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="type"
//                 placeholder="Type 2bhk..."
//                 value={formData.pg_mess}
//                 onChange={handleInputChange}
//                 required
//               />

//             </div>
//           )}
//           {formData.category === "House" && (
//             <div>
//               <input
//                 type="number"
//                 name="size"
//                 placeholder="Size"
//                 value={formData.size}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="floors"
//                 placeholder="Floors"
//                 value={formData.floors}
//                 onChange={handleInputChange}
//                 required
//               />

//             </div>
//           )}
//           <button
//             type="submit"

//           >
//             {updatingPropertyId ? "Update Property" : "Add Property"}
//           </button>
//         </form>
//         <h2>Rental Properties</h2>
//         <div className="property-list">
//           {properties.map((property) => (
//             <div key={property.id} className="property-card">
//               <div
//                 className="property-image"
//                 style={{ backgroundImage: `url(${property.imageData})` }}
//               ></div>
//               <div className="property-details">
//                 <h3>{property.title}</h3>
//                 <p>Location: {property.Locality}</p>
//                 <p>Category: {property.category}</p>
//                 <p>Type: {property.type}</p>
//                 <p>Price: ₹{property.price.toLocaleString()}</p>
//                 <p>Description: {property.description}</p>
//                 {property.category === "Flat" && (
//                   <>
//                     <p>Size: {property.size}</p>
//                     <p>Emminities: {property.emminities}</p>
//                     <p>PG Mess: {property.pg_mess}</p>
//                     <p>Mess Timing: {property.mess_timing}</p>
//                   </>
//                 )}
//                 {property.category === "House" && (
//                   <>
//                     <p>Size: {property.size}</p>
//                     <p>Floors: {property.floors}</p>
//                     <p>Emminities: {property.emminities}</p>
//                     <p>PG Mess: {property.pg_mess}</p>
//                     <p>Mess Timing: {property.mess_timing}</p>
//                   </>
//                 )}
//               </div>
//               <div className="property-actions">
//                 {updatingPropertyId === null && (
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteProperty(property.id)}
//                   >
//                     Delete
//                   </button>
//                 )}
//                 <button
//                   className="update-button"
//                   onClick={() => handleUpdateProperty(property.id)}
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // const InsertItemInMysql = async (formData)=>{
// //   console.log("add item");
// //   try {
// //     const response = await axios.post("http://localhost:1122/additem", formData);
// //     console.log(response.data);
// //   } catch (error) {
// //     console.error("Error registering user:", error);
// //   }

// // }

// export default Properties;

// // local storage
// // import React, { useState, useEffect } from "react";
// // import "./Properties.css";
// // import axios from "axios";
// // function Properties() {
// // const [properties, setProperties] = useState(() => {
// //     const savedProperties = localStorage.getItem("properties");
// //     if (savedProperties) {
// //       try {
// //         const parsedProperties = JSON.parse(savedProperties);
// //         if (parsedProperties.length <= 1000000) {
// //           return parsedProperties;
// //         } else {
// //           console.error("Storage limit exceeded. Clearing localStorage.");
// //           localStorage.removeItem("properties");
// //         }
// //       } catch (error) {
// //         console.error("Error parsing properties from localStorage:", error);
// //       }
// //     }
// //     return [];
// //   });

// //   const [formData, setformData] = useState({
// //     title: "",
// //     Locality: "",
// //     category: "Flat",
// //     type: "Rent",
// //     price: "",
// //     description: "",
// //     image: null,
// //     pg_timing: "",
// //     emminities: "",
// //     pg_mess: "",
// //     mess_timing: "",
// //     // adding for house
// //     size: "",
// //     floors: 0,
// //   });

// //   const [updatingPropertyId, setUpdatingPropertyId] = useState(null);

// //   useEffect(() => {
// //     localStorage.setItem("properties", JSON.stringify(properties));
// //   }, [properties]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;

// //     // Update the formData state based on the input name
// //     setformData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     setformData((prevState) => ({
// //       ...prevState,
// //       image: file,
// //     }));
// //   };

// //   const handleAddProperty = (e) => {
// //     // Validation: Check if all required fields are filled
// //     e.preventDefault();
// //     if (
// //       !formData.title ||
// //       !formData.price ||
// //       !formData.Locality ||
// //       !formData.description ||
// //       !formData.image
// //     ) {
// //       alert("Please fill in all required fields.");
// //       return;
// //     }

// //     const id = properties.length + 1;
// //     // Store the image data directly in localStorage
// //     const reader = new FileReader();
// //     reader.onload = () => {
// //       const imageData = reader.result;
// //       setProperties((prevState) => [
// //         ...prevState,
// //         { ...formData, id, imageData },
// //       ]);
// //       // Reset the formData state
// //       setformData({
// //         title: "",
// //         Locality: "",
// //         category: "Flat",
// //         type: "Rent",
// //         price: "",
// //         description: "",
// //         image: null,
// //         pg_timing: "",
// //         emminities: "",
// //         pg_mess: "",
// //         mess_timing: "",
// //         // adding for house
// //         size: "",
// //         floors: 0,
// //         Ftype:""
// //       });
// //     };
// //     reader.readAsDataURL(formData.image);
// //   };

// //   const handleDeleteProperty = (id) => {
// //     const updatedProperties = properties.filter(
// //       (property) => property.id !== id
// //     );
// //     setProperties(updatedProperties);
// //   };

// //   const handleUpdateProperty = (id) => {
// //     setUpdatingPropertyId(id);
// //     const propertyToUpdate = properties.find((property) => property.id === id);
// //     setformData(propertyToUpdate);
// //   };

// //   const handleFormSubmit = () => {
// //     const updatedProperties = properties.map((property) => {
// //       if (property.id === formData.id) {
// //         return formData;
// //       }
// //       return property;
// //     });

// //     setProperties(updatedProperties);
// //     setUpdatingPropertyId(null);
// //     setformData({
// //       title: "",
// //       Locality: "",
// //       category: "Flat",
// //       type: "Rent",
// //       price: "",
// //       description: "",
// //       image: null,
// //       pg_timing: "",
// //       emminities: "",
// //       pg_mess: "",
// //       mess_timing: "",
// //       // adding for house
// //       size: "",
// //       floors: 0,
// //       Ftype:"",
// //     });
// //   };

// //   return (
// //     <div className="App">
// //       <div className="container">
// //         <h2>Add New Property</h2>
// //         <form onSubmit={ (formData)=> {InsertItemInMysql(formData)}}>
// //           <input
// //             type="text"
// //             name="title"
// //             placeholder="Title"
// //             value={formData.title}
// //             onChange={handleInputChange}
// //             required
// //           />
// //           <input
// //             type="text"
// //             name="Locality"
// //             placeholder="Location"
// //             value={formData.Locality}
// //             onChange={handleInputChange}
// //             required
// //           />
// //           <select
// //             name="category"
// //             value={formData.category}
// //             onChange={handleInputChange}
// //             required
// //           >
// //             <option value="PG">PG</option>
// //             <option value="Flat">Flat</option>
// //             <option value="House">House</option>
// //           </select>
// //           <select
// //             name="type"
// //             value={formData.type}
// //             onChange={handleInputChange}
// //             disabled={formData.category === "PG"}
// //           >
// //             <option value="Rent">Rent</option>
// //             {formData.category !== "PG" && (
// //               <option value="Sell">Sell</option>
// //             )}
// //           </select>
// //           <input
// //             type="number"
// //             name="price"
// //             placeholder="Price"
// //             value={formData.price}
// //             onChange={handleInputChange}
// //             required
// //           />
// //           <textarea
// //             name="description"
// //             placeholder="Description"
// //             value={formData.description}
// //             onChange={handleInputChange}
// //             required
// //           ></textarea>
// //           <input
// //             type="file"
// //             name="image"
// //             onChange={handleImageUpload}
// //             accept="image/*"
// //             required
// //           />
// //           {formData.category === "PG" && (
// //             <div>
// //               <input
// //                 type="text"
// //                 name="pg_timing"
// //                 placeholder="PG Timing"
// //                 value={formData.pg_timing}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="emminities"
// //                 placeholder="Emminities"
// //                 value={formData.emminities}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="pg_mess"
// //                 placeholder="PG Mess"
// //                 value={formData.pg_mess}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="mess_timing"
// //                 placeholder="Mess Timing"
// //                 value={formData.mess_timing}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>
// //           )}
// //           {/* // for flat */}
// //           {formData.category === "Flat" && (
// //             <div>
// //               <input
// //                 type="number"
// //                 name="size"
// //                 placeholder="Size"
// //                 value={formData.size}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="number"
// //                 name="floors"
// //                 placeholder="Emminities"
// //                 value={formData.floors}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="type"
// //                 placeholder="Type 2bhk..."
// //                 value={formData.pg_mess}
// //                 onChange={handleInputChange}
// //                 required
// //               />

// //             </div>
// //           )}
// //           {formData.category === "House" && (
// //             <div>
// //               <input
// //                 type="number"
// //                 name="size"
// //                 placeholder="Size"
// //                 value={formData.size}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="number"
// //                 name="floors"
// //                 placeholder="Floors"
// //                 value={formData.floors}
// //                 onChange={handleInputChange}
// //                 required
// //               />

// //             </div>
// //           )}
// //           <button
// //             type="submit"
// //             onClick={updatingPropertyId ? handleFormSubmit : handleAddProperty}
// //           >
// //             {updatingPropertyId ? "Update Property" : "Add Property"}
// //           </button>
// //         </form>
// //         <h2>Rental Properties</h2>
// //         <div className="property-list">
// //           {properties.map((property) => (
// //             <div key={property.id} className="property-card">
// //               <div
// //                 className="property-image"
// //                 style={{ backgroundImage: `url(${property.imageData})` }}
// //               ></div>
// //               <div className="property-details">
// //                 <h3>{property.title}</h3>
// //                 <p>Location: {property.Locality}</p>
// //                 <p>Category: {property.category}</p>
// //                 <p>Type: {property.type}</p>
// //                 <p>Price: ₹{property.price.toLocaleString()}</p>
// //                 <p>Description: {property.description}</p>
// //                 {property.category === "Flat" && (
// //                   <>
// //                     <p>Size: {property.size}</p>
// //                     <p>Emminities: {property.emminities}</p>
// //                     <p>PG Mess: {property.pg_mess}</p>
// //                     <p>Mess Timing: {property.mess_timing}</p>
// //                   </>
// //                 )}
// //                 {property.category === "House" && (
// //                   <>
// //                     <p>Size: {property.size}</p>
// //                     <p>Floors: {property.floors}</p>
// //                     <p>Emminities: {property.emminities}</p>
// //                     <p>PG Mess: {property.pg_mess}</p>
// //                     <p>Mess Timing: {property.mess_timing}</p>
// //                   </>
// //                 )}
// //               </div>
// //               <div className="property-actions">
// //                 {updatingPropertyId === null && (
// //                   <button
// //                     className="delete-button"
// //                     onClick={() => handleDeleteProperty(property.id)}
// //                   >
// //                     Delete
// //                   </button>
// //                 )}
// //                 <button
// //                   className="update-button"
// //                   onClick={() => handleUpdateProperty(property.id)}
// //                 >
// //                   Update
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const InsertItemInMysql = async (formData)=>{
// //   try {
// //     const response = await axios.post("/addItem", formData);
// //     console.log(response.data);
// //   } catch (error) {
// //     console.error("Error registering user:", error);
// //   }

// // }

// // export default Properties;
