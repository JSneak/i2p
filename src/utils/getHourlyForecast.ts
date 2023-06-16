const getHourlyForecast = async (url: string) => {
  let hourlyForecast = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return hourlyForecast;
};

export default getHourlyForecast;
