import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { NavLink, useParams } from "react-router-dom";

const ApartmentShow = ({ apartments }) => {
  let { id } = useParams();
  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );

  return (
    <>
      <h2>Listing Info: </h2>
      <div className="apartment-show">
        {currentApartment && (
          <Card
            className="show-card"
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={currentApartment.image} />
            <CardBody className="card-show">
              <CardTitle tag="h5">{apartments.address}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {currentApartment.city}, {currentApartment.state}
              </CardSubtitle>
              <CardText>
                <h2>Price: ${currentApartment.price}</h2>
                <table>
                  <tr>
                    <td>Bedrooms: {currentApartment.bedrooms}</td>
                    <td>Bathrooms: {currentApartment.bathrooms}</td>
                  </tr>
                  <tr>
                    <td>Square Footage: {currentApartment.square_footage}</td>
                  </tr>
                  <tr></tr>
                </table>
              </CardText>
              <Button>
                <NavLink to={`/apartmentindex/`}>Back to listings</NavLink>
              </Button>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default ApartmentShow;
