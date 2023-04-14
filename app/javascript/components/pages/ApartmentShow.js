import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import {NavLink, useParams} from "react-router-dom";

const ApartmentShow = ({apartments}) => {
  let {id}=useParams()
  const currentApartment=apartments?.find((apartment) => apartment.id === +id)

  return (
    <>
    <h2>Listing Info: </h2>
    {currentApartment &&
    <Card
             className="show-card"
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={currentApartment.image} />
              <CardBody>
                <CardTitle tag="h5">{apartments.address}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {currentApartment.city}, {currentApartment.state}
                </CardSubtitle>
                <CardText>
                  {`This ${currentApartment.bedrooms} bedroom, ${currentApartment.bathrooms} bath apartment is BEGGING to get SLAMMED`}
                </CardText>
                <Button>
                  <NavLink to={`/apartmentindex/`}>Back to listings</NavLink></Button>
              </CardBody>
            </Card>
            }
            </>)
}

export default ApartmentShow