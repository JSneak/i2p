export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

const GEOCODING_API_URL =
  "https://geocoding.geo.census.gov/geocoder/locations/address?";

const createGeocodingURL = (address: Address) => {
  return (
    GEOCODING_API_URL +
    Object.keys(address)
      .map((key) => {
        return key + "=" + address[key as keyof Address];
      })
      .join("&") +
    "&benchmark=Public_AR_Current&format=json"
  );
};

const getGeocoding = async (address: Address) => {
  // const addressArray = parseAddress(address);
  // if (!addressArray) return console.log("Invalid address");
  // Need to add some sort of validation on the input address
  const url: string = createGeocodingURL(address);

  console.log("Geocoding ", url);
  fetch(url, { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default getGeocoding;
