import React from 'react';
import PropertyCard from './PropertyCard';

export default function PropertyList({ property }) {
  return (
    <div className="container">
      <h3 className="text-center">Properties</h3>
      {property.length === 0 ? (
        <h2>No properties to display</h2>
      ) : (
        property.map((element, i) => (
          <PropertyCard key={i} property={element} />
        ))
      )}
    </div>
  );
}
