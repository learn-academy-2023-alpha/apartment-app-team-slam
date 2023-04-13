import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const ApartmentIndex = ({ apartments }) => {
  return (
    <>
      <h2>Current Listings</h2>
      <div className="index-listing">
        {apartments.map((apartment, index) => {
          return (
            <Card
              key={index}
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">{apartment.address}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {apartment.city}, {apartment.state}
                </CardSubtitle>
                <CardText>
                  {`This ${apartment.bedrooms} bedroom, ${apartment.bathrooms} bath apartment is BEGGING to get SLAMMED`}
                </CardText>
                <Button>Show More Info</Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ApartmentIndex;
