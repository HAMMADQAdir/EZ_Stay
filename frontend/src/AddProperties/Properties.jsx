import React, { useState, useEffect } from "react";
import "./Properties.css";
import axios from "axios";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    title: "",
    location: "",
    category: "Flat",
    type: "Rent",
    price: "",
    description: "",
    image: null,
    pg_timing: "",
    emminities: "",
    pg_mess: "",
    mess_timing: "",
    // adding for house
    size: "",
    floors: 0,
  });

  const [updatingPropertyId, setUpdatingPropertyId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(newProperty)
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewProperty((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    if (
      !newProperty.title ||
      !newProperty.price ||
      !newProperty.location ||
      !newProperty.description ||
      !newProperty.image
    ) {
      alert("Please fill in all required fields.");
      return;
    }
console.log("aa gya insert function main")
    try {
     
      console.log("aa gya api function main")
      console.log(newProperty)
     if(newProperty){ const response = await axios.post("http://localhost:1122/prpty", newProperty).then((response)=>{
      console.log("gotit")
      alert("added");
    }).catch((err)=>{console.log(err.message)})}
      // const id = properties.length + 1;
      // setProperties((prevState) => [
      //   ...prevState,
      //   { ...newProperty, id, imageData: response.data.imageData },
      // ]);
      setNewProperty({
        title: "",
        location: "",
        category: "Flat",
        type: "Rent",
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
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  const handleDeleteProperty = async (id) => {
    // try {
    //   await axios.delete(`/deleteItem/${id}`);
    //   const updatedProperties = properties.filter((property) => property.id !== id);
    //   setProperties(updatedProperties);
    // } catch (error) {
    //   console.error("Error deleting property:", error);
    // }
  };

  const handleUpdateProperty = (id) => {
    setUpdatingPropertyId(id);
    const propertyToUpdate = properties.find((property) => property.id === id);
    setNewProperty(propertyToUpdate);
  };

  const handleFormSubmit = async () => {
    try {
   
      const updatedProperties = properties.map((property) => {
        if (property.id === newProperty.id) {
          return newProperty;
        }
        return property;
      });
      setProperties(updatedProperties);
      setUpdatingPropertyId(null);
      setNewProperty({
        title: "",
        location: "",
        category: "Flat",
        type: "Rent",
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
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Add New Property</h2>
        <form onSubmit={ updatingPropertyId ? handleFormSubmit :(e)=>{handleAddProperty(e)}}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newProperty.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newProperty.location}
            onChange={handleInputChange}
            required
          />
          <select
            name="category"
            value={newProperty.category}
            onChange={handleInputChange}
            required
          >
            <option value="PG">PG</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
          </select>
          <select
            name="type"
            value={newProperty.type}
            onChange={handleInputChange}
            disabled={newProperty.category === "PG"}
          >
            <option value="Rent">Rent</option>
            {newProperty.category !== "PG" && (
              <option value="Sell">Sell</option>
            )}
          </select>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProperty.price}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newProperty.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="file"
            name="image"
            onChange={handleImageUpload}
            accept="image/*" 
            required
          />
          {newProperty.category === "PG" && (
            <div>
              <input
                type="text"
                name="pg_timing"
                placeholder="PG Timing"
                value={newProperty.pg_timing}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="emminities"
                placeholder="Emminities"
                value={newProperty.emminities}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="pg_mess"
                placeholder="PG Mess"
                value={newProperty.pg_mess}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="mess_timing"
                placeholder="Mess Timing"
                value={newProperty.mess_timing}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {/* // for flat */}
          {newProperty.category === "Flat" && (
            <div>
              <input
                type="number"
                name="size"
                placeholder="Size"
                value={newProperty.size}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="floors"
                placeholder="Emminities"
                value={newProperty.floors}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="type"
                placeholder="Type 2bhk..."
                value={newProperty.pg_mess}
                onChange={handleInputChange}
                required
              />
            
            </div>
          )}
          {newProperty.category === "House" && (
            <div>
              <input
                type="number"
                name="size"
                placeholder="Size"
                value={newProperty.size}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="floors"
                placeholder="Floors"
                value={newProperty.floors}
                onChange={handleInputChange}
                required
              />
           
            </div>
          )}
          <button
            type="submit"
         
          >
            {updatingPropertyId ? "Update Property" : "Add Property"}
          </button>
        </form>
        <h2>Rental Properties</h2>
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div
                className="property-image"
                style={{ backgroundImage: `url(${property.imageData})` }}
              ></div>
              <div className="property-details">
                <h3>{property.title}</h3>
                <p>Location: {property.location}</p>
                <p>Category: {property.category}</p>
                <p>Type: {property.type}</p>
                <p>Price: ₹{property.price.toLocaleString()}</p>
                <p>Description: {property.description}</p>
                {property.category === "Flat" && (
                  <>
                    <p>Size: {property.size}</p>
                    <p>Emminities: {property.emminities}</p>
                    <p>PG Mess: {property.pg_mess}</p>
                    <p>Mess Timing: {property.mess_timing}</p>
                  </>
                )}
                {property.category === "House" && (
                  <>
                    <p>Size: {property.size}</p>
                    <p>Floors: {property.floors}</p>
                    <p>Emminities: {property.emminities}</p>
                    <p>PG Mess: {property.pg_mess}</p>
                    <p>Mess Timing: {property.mess_timing}</p>
                  </>
                )}
              </div>
              <div className="property-actions">
                {updatingPropertyId === null && (
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteProperty(property.id)}
                  >
                    Delete
                  </button>
                )}
                <button
                  className="update-button"
                  onClick={() => handleUpdateProperty(property.id)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// const InsertItemInMysql = async (newProperty)=>{
//   console.log("add item");
//   try {
//     const response = await axios.post("http://localhost:1122/additem", newProperty);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error registering user:", error);
//   }

// }

export default Properties;



// local storage
// import React, { useState, useEffect } from "react";
// import "./Properties.css";
// import axios from "axios";
// function Properties() {
// const [properties, setProperties] = useState(() => {
//     const savedProperties = localStorage.getItem("properties");
//     if (savedProperties) {
//       try {
//         const parsedProperties = JSON.parse(savedProperties);
//         if (parsedProperties.length <= 1000000) {
//           return parsedProperties;
//         } else {
//           console.error("Storage limit exceeded. Clearing localStorage.");
//           localStorage.removeItem("properties");
//         }
//       } catch (error) {
//         console.error("Error parsing properties from localStorage:", error);
//       }
//     }
//     return [];
//   });

//   const [newProperty, setNewProperty] = useState({
//     title: "",
//     location: "",
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

//   useEffect(() => {
//     localStorage.setItem("properties", JSON.stringify(properties));
//   }, [properties]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Update the newProperty state based on the input name
//     setNewProperty((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setNewProperty((prevState) => ({
//       ...prevState,
//       image: file,
//     }));
//   };

//   const handleAddProperty = (e) => {
//     // Validation: Check if all required fields are filled
//     e.preventDefault();
//     if (
//       !newProperty.title ||
//       !newProperty.price ||
//       !newProperty.location ||
//       !newProperty.description ||
//       !newProperty.image
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const id = properties.length + 1;
//     // Store the image data directly in localStorage
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageData = reader.result;
//       setProperties((prevState) => [
//         ...prevState,
//         { ...newProperty, id, imageData },
//       ]);
//       // Reset the newProperty state
//       setNewProperty({
//         title: "",
//         location: "",
//         category: "Flat",
//         type: "Rent",
//         price: "",
//         description: "",
//         image: null,
//         pg_timing: "",
//         emminities: "",
//         pg_mess: "",
//         mess_timing: "",
//         // adding for house
//         size: "",
//         floors: 0,
//         Ftype:""
//       });
//     };
//     reader.readAsDataURL(newProperty.image);
//   };

//   const handleDeleteProperty = (id) => {
//     const updatedProperties = properties.filter(
//       (property) => property.id !== id
//     );
//     setProperties(updatedProperties);
//   };

//   const handleUpdateProperty = (id) => {
//     setUpdatingPropertyId(id);
//     const propertyToUpdate = properties.find((property) => property.id === id);
//     setNewProperty(propertyToUpdate);
//   };

//   const handleFormSubmit = () => {
//     const updatedProperties = properties.map((property) => {
//       if (property.id === newProperty.id) {
//         return newProperty;
//       }
//       return property;
//     });

//     setProperties(updatedProperties);
//     setUpdatingPropertyId(null);
//     setNewProperty({
//       title: "",
//       location: "",
//       category: "Flat",
//       type: "Rent",
//       price: "",
//       description: "",
//       image: null,
//       pg_timing: "",
//       emminities: "",
//       pg_mess: "",
//       mess_timing: "",
//       // adding for house
//       size: "",
//       floors: 0,
//       Ftype:"",
//     });
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h2>Add New Property</h2>
//         <form onSubmit={ (newProperty)=> {InsertItemInMysql(newProperty)}}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={newProperty.title}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={newProperty.location}
//             onChange={handleInputChange}
//             required
//           />
//           <select
//             name="category"
//             value={newProperty.category}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="PG">PG</option>
//             <option value="Flat">Flat</option>
//             <option value="House">House</option>
//           </select>
//           <select
//             name="type"
//             value={newProperty.type}
//             onChange={handleInputChange}
//             disabled={newProperty.category === "PG"}
//           >
//             <option value="Rent">Rent</option>
//             {newProperty.category !== "PG" && (
//               <option value="Sell">Sell</option>
//             )}
//           </select>
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={newProperty.price}
//             onChange={handleInputChange}
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={newProperty.description}
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
//           {newProperty.category === "PG" && (
//             <div>
//               <input
//                 type="text"
//                 name="pg_timing"
//                 placeholder="PG Timing"
//                 value={newProperty.pg_timing}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="emminities"
//                 placeholder="Emminities"
//                 value={newProperty.emminities}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="pg_mess"
//                 placeholder="PG Mess"
//                 value={newProperty.pg_mess}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="mess_timing"
//                 placeholder="Mess Timing"
//                 value={newProperty.mess_timing}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           )}
//           {/* // for flat */}
//           {newProperty.category === "Flat" && (
//             <div>
//               <input
//                 type="number"
//                 name="size"
//                 placeholder="Size"
//                 value={newProperty.size}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="floors"
//                 placeholder="Emminities"
//                 value={newProperty.floors}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="type"
//                 placeholder="Type 2bhk..."
//                 value={newProperty.pg_mess}
//                 onChange={handleInputChange}
//                 required
//               />
            
//             </div>
//           )}
//           {newProperty.category === "House" && (
//             <div>
//               <input
//                 type="number"
//                 name="size"
//                 placeholder="Size"
//                 value={newProperty.size}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="floors"
//                 placeholder="Floors"
//                 value={newProperty.floors}
//                 onChange={handleInputChange}
//                 required
//               />
           
//             </div>
//           )}
//           <button
//             type="submit"
//             onClick={updatingPropertyId ? handleFormSubmit : handleAddProperty}
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
//                 <p>Location: {property.location}</p>
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

// const InsertItemInMysql = async (newProperty)=>{
//   try {
//     const response = await axios.post("/addItem", newProperty);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error registering user:", error);
//   }

// }

// export default Properties;

