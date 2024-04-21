import React from 'react';
import styled, { keyframes } from 'styled-components';
// import pic1 from "./pic1.jpg";
// import pic2 from "./pic2.jpg";
// import pic3 from "./pic3.jpg";
// import pic4 from "./pic 4.jpg";


const properties = [
    {
        name: 'Cozy Apartment',
        description: 'A lovely apartment in the heart of the city.',
        rent: 1500,
        image: "pic1"
    },
    {
        name: 'Spacious House',
        description: 'A beautiful house with a big garden.',
        rent: 2500,
        image: ""
    },
    {
        name: 'Modern Condo',
        description: 'A sleek and modern condo with great amenities.',
        rent: 2000,
        image: ""
    },
    {
        name: 'Rustic Cabin',
        description: 'A cozy cabin nestled in the woods.',
        rent: 1800,
        image: ""
    },
    {
        name: 'Luxury Villa',
        description: 'An extravagant villa with breathtaking views.',
        rent: 5000,
        image: ""
    },
    {
        name: 'Beachfront Bungalow',
        description: 'A charming bungalow right by the beach.',
        rent: 2200,
        image: ""
    }
];

const extendedProperties = properties.concat(properties); // Duplicate the properties list to create a continuous loop

export default function Carousel() {
    return (
        <Wrapper >
            <Text>Featured Properties</Text>
            <Note>Swipe to explore</Note>
            <Marquee>
                <MarqueeGroup>
                    {extendedProperties.map((property, index) => (
                        <Card key={index}>
                            {/* <Image src={property.image"" */}
                            <CardContent>
                                <PropertyName>{property.name}</PropertyName>
                                <PropertyDescription>{property.description}</PropertyDescription>
                                <PropertyRent>Rent: ${property.rent}</PropertyRent>
                            </CardContent>
                        </Card>
                    ))}
                     {extendedProperties.map((property, index) => (
                        <Card key={index}>
                            {/* <Image src={property.image"" */}
                            <CardContent>
                                <PropertyName>{property.name}</PropertyName>
                                <PropertyDescription>{property.description}</PropertyDescription>
                                <PropertyRent>Rent: ${property.rent}</PropertyRent>
                            </CardContent>
                        </Card>
                    ))}
                </MarqueeGroup>
                
            </Marquee>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin:1rem
    padding:10%
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.div`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #ffffgh;
`;

const Note = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #ffffgh;
`;

const Marquee = styled.div`
    display: flex;
    width: 1200px;
    user-select: none;
    overflow: hidden;
`;

const scrollX = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const MarqueeGroup = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 200%; /* Double the width to accommodate the duplicated properties */
    animation: ${scrollX} 20s linear infinite; /* Adjust the duration to match the length of the extended properties list */
`;

const Card = styled.div`
    flex: 0 0 auto;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-right: 1rem; /* Adjust as needed */
    box-shadow: 1 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
    margin-bottom:1rem;
    
    `;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
`;

const CardContent = styled.div`
    padding-top: 1rem;
`;

const PropertyName = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const PropertyDescription = styled.div`
    font-size: 16px;
    margin-top: 0.5rem;
`;

const PropertyRent = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 0.5rem;
`;
