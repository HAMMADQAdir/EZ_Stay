import React, { useState } from 'react';
import RiseLoader from 'react-spinners/RiseLoader';


const Loader = ({ loading }) => {
  const [color, setColor] = useState("#ffffff");

  return (
    
        <>
            
            <RiseLoader color="#36d7b7" size ={120}/>
        

        </>
  );
};

export default Loader;
