import { test as TestData } from "./mockData";

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

const CORS_PROXY = "https://corsanywhere-theseankim33.b4a.run/";

const GEOCODING_API_URL =
  "https://geocoding.geo.census.gov/geocoder/locations/address?{address}&benchmark=Public_AR_Current&format=jsonp";

const createGeocodingURL = (address: Address) => {
  return GEOCODING_API_URL.replace(
    "{address}",
    Object.keys(address)
      .map((key) => {
        return key + "=" + address[key as keyof Address];
      })
      .join("&")
  );
};

const getGeocoding = (address: Address) => {
  const url: string = createGeocodingURL(address);

  fetch(CORS_PROXY + url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.result.addressMatches[0].coordinates;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return TestData.result.addressMatches[0].coordinates;
};

export default getGeocoding;
