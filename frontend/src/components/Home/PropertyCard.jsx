import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { auth, storage} from "../firebaseConfig/firebaseConfig";
import { getDownloadURL,ref } from 'firebase/storage';
import { useEffect,useState } from 'react';
export default function PropertyCard({ property }) {
  const [imageUrl, setImageUrl] = useState(""); 
  const retrieveImage = async () => {
    const imgRef = ref(storage, "images/NaN"); // Replace "imageId" with the actual image ID
    try {
      const url = await getDownloadURL(imgRef);
      setImageUrl(url);
    } catch (error) {
      console.error("Error retrieving image:", error);
    }
  };

  useEffect(() => {
    retrieveImage(); // Retrieve the image URL when the component mounts
  }, []);
  return (
    <div className="row" style={{display:"flex",justifyContent:"center"}}>
      <div className="col-md-6">
        <Card style={{ margin: '10px' }}>
          <Card.Body>
            <img src={imageUrl} alt="" style={{height:"40px",width:"40px"}}/>
            <Card.Title>{property.Locality}</Card.Title>
            <Card.Text>{property.description}</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      </div>
     
    </div>
  );
}
