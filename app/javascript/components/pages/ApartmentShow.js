import React from 'react'

const ApartmentShow = ({apartments}) => {
  let {id}=useParams()
  const currentApartment=apartments?.find((apartment) => apartment.id === +id)

  return (
    
    <Card
             className="show-card"
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={currentApartment.image} />
              <CardBody>
                <CardTitle tag="h5">{apartment.address}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {currentApartment.city}, {currentApartment.state}
                </CardSubtitle>
                <CardText>
                  {`This ${currentApartment.bedrooms} bedroom, ${currentApartment.bathrooms} bath apartment is BEGGING to get SLAMMED`}
                </CardText>
                <Button>
                  <NavLink to={`/apartmentshow/${currentApartment.id}`}>Show More Info</NavLink></Button>
              </CardBody>
            </Card>
  )
}

export default ApartmentShow