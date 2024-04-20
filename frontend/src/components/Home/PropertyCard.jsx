import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PropertyCard({ property }) {
  return (
    <div className="row" style={{display:"flex",justifyContent:"center"}}>
      <div className="col-md-6">
        <Card style={{ margin: '10px' }}>
          <Card.Body>
            <Card.Title>{property.Pincode}</Card.Title>
            <Card.Text>{property.Locality}</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      </div>
     
    </div>
  );
}
