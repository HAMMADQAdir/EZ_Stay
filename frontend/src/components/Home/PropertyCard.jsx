import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { auth, storage} from "../firebaseConfig/firebaseConfig";
import { getDownloadURL,ref,listAll } from 'firebase/storage';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function PropertyCard({ property },{ima}) {
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
  const navigate = useNavigate();

  useEffect(() => {
    retrieveImages();
  }, []);
console.log(imageUrls);
  return (

    <div className="row" style={{display:"flex",justifyContent:"center"}}>
      <div className="col-md-6">
        <Card style={{ margin: '10px' }}>
          <Card.Body>
          {imageUrls.map((imageUrl, i) => (
              <img style={{height:"50px",width:"50px"}} key={i} src={imageUrl} alt={`Property Image ${i}` } />
            ))}

            <Card.Title>{property.Locality}</Card.Title>
            <Card.Text>{property.description}</Card.Text>
            <Button variant="primary" >View</Button>
          </Card.Body>
        </Card>
      </div>
     
    </div>
  );
}
