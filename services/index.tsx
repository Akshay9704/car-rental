import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query MyQuery {
      carLists {
        id
        name
        price
        publishedAt
        seat
        updatedAt
        carAvg
        carBrand
        carType
        createdAt
        image {
          url
        }
      }
    }
  `;
  const res = await request(
    "https://ap-south-1.cdn.hygraph.com/content/cm0exuz4701sh07uozosliljg/master",
    query
  );
  return res;
};

export const getLocations = async () => {
  const query = gql`
    query MyQuery {
      storeLocations {
        address
        createdAt
        id
        updatedAt
      }
    }
  `;
  const res = await request(
    "https://ap-south-1.cdn.hygraph.com/content/cm0exuz4701sh07uozosliljg/master",
    query
  );
  return res;
};

export const createBooking = async (formValues: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          carId: { connect: { id: "`+formValues.carId.connect.id+`" } }
          contactNumber: ${formValues.contactNumber}
          dropOffDate: "`+formValues.dropOffDate+`" 
          dropOffTime: "`+formValues.dropOffTime+`"
          pickUpDate: "`+formValues.pickUpDate+`"
          pickUpTime: "`+formValues.pickUpTime+`"
        }
      ) {
        id
        contactNumber
        dropOffDate
        dropOffTime
        pickUpDate
        pickUpTime
      }
    }
  `;
  const res = await request(
    "https://ap-south-1.cdn.hygraph.com/content/cm0exuz4701sh07uozosliljg/master",
    mutationQuery
  );
  return res;
};
