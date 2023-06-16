import { Address } from "./getGeocoding";

export const formatAddress = (address: string) => {
  const addressArray = address.split(",");

  const street = addressArray[0].trim().replaceAll(" ", "+");
  const city = addressArray[1].trim();
  const state = addressArray[2].trim().split(" ")[0];
  const zip = addressArray[2].trim().split(" ")[1];

  const formattedAddress: Address = {
    street: street,
    city: city,
    state: state,
    zip: zip,
  };

  return formattedAddress;
};
