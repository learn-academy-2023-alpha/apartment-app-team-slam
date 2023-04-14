import React from "react";

const ProtectedIndex = ({ apartments, current_user }) => {
  // read from apartments and filter for all apartments that match the current_user id

  const myapartments = apartments?.filter(
    (apartment) => current_user.id === apartment.user_id
  );

  return (
    <>
      <h2>My Listings</h2>
      <div className="index-listing">
        {myApartments.map((apartment, index) => {
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

export default MyApartments;
