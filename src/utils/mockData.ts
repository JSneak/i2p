import { Forecast } from "./getWeather";

export const test = {
  result: {
    input: {
      address: { address: "4600 Silver Hill Rd, Washington, DC 20233" },

      benchmark: {
        isDefault: false,

        benchmarkDescription: "Public Address Ranges - Census 2020 Benchmark",

        id: "2020",

        benchmarkName: "Public_AR_Census2020",
      },
    },

    addressMatches: [
      {
        tigerLine: {
          side: "L",

          tigerLineId: "76355984",
        },

        coordinates: {
          x: -76.92744,

          y: 38.845985,
        },

        addressComponents: {
          zip: "20233",

          streetName: "SILVER HILL",

          preType: "",

          city: "WASHINGTON",

          preDirection: "",

          suffixDirection: "",

          fromAddress: "4600",

          state: "DC",

          suffixType: "RD",

          toAddress: "4700",

          suffixQualifier: "",

          preQualifier: "",
        },

        matchedAddress: "4600 SILVER HILL RD, WASHINGTON, DC, 20233",
      },
    ],
  },
};

export const mockWeather = {
  "@context": [
    "https://geojson.org/geojson-ld/geojson-context.jsonld",
    {
      "@version": "1.1",
      wx: "https://api.weather.gov/ontology#",
      geo: "http://www.opengis.net/ont/geosparql#",
      unit: "http://codes.wmo.int/common/unit/",
      "@vocab": "https://api.weather.gov/ontology#",
    },
  ],
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-76.9279787, 38.8670956],
        [-76.93175719999999, 38.845150499999995],
        [-76.90357589999999, 38.8422055],
        [-76.89979159999999, 38.8641503],
        [-76.9279787, 38.8670956],
      ],
    ],
  },
  properties: {
    updated: "2023-06-11T14:29:46+00:00",
    units: "us",
    forecastGenerator: "BaselineForecastGenerator",
    generatedAt: "2023-06-11T15:57:53+00:00",
    updateTime: "2023-06-11T14:29:46+00:00",
    validTimes: "2023-06-11T08:00:00+00:00/P7DT17H",
    elevation: {
      unitCode: "wmoUnit:m",
      value: 75.8952,
    },
    periods: [
      {
        number: 1,
        name: "Today",
        startTime: "2023-06-11T11:00:00-04:00",
        endTime: "2023-06-11T18:00:00-04:00",
        isDaytime: true,
        temperature: 89,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 13.88888888888889,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 45,
        },
        windSpeed: "7 to 14 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/day/sct?size=medium",
        shortForecast: "Mostly Sunny",
        detailedForecast:
          "Mostly sunny, with a high near 89. Southwest wind 7 to 14 mph, with gusts as high as 18 mph.",
      },
      {
        number: 2,
        name: "Tonight",
        startTime: "2023-06-11T18:00:00-04:00",
        endTime: "2023-06-12T06:00:00-04:00",
        isDaytime: false,
        temperature: 69,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 17.77777777777778,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 81,
        },
        windSpeed: "13 to 17 mph",
        windDirection: "S",
        icon: "https://api.weather.gov/icons/land/night/bkn/tsra_sct,30?size=medium",
        shortForecast: "Mostly Cloudy then Chance Showers And Thunderstorms",
        detailedForecast:
          "A chance of rain showers between 2am and 5am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 69. South wind 13 to 17 mph, with gusts as high as 29 mph. Chance of precipitation is 30%. New rainfall amounts less than a tenth of an inch possible.",
      },
      {
        number: 3,
        name: "Monday",
        startTime: "2023-06-12T06:00:00-04:00",
        endTime: "2023-06-12T18:00:00-04:00",
        isDaytime: true,
        temperature: 80,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 100,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 20,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 93,
        },
        windSpeed: "15 mph",
        windDirection: "S",
        icon: "https://api.weather.gov/icons/land/day/tsra,60/tsra,100?size=medium",
        shortForecast: "Showers And Thunderstorms",
        detailedForecast:
          "Showers and thunderstorms. Cloudy, with a high near 80. South wind around 15 mph, with gusts as high as 22 mph. Chance of precipitation is 100%. New rainfall amounts between three quarters and one inch possible.",
      },
      {
        number: 4,
        name: "Monday Night",
        startTime: "2023-06-12T18:00:00-04:00",
        endTime: "2023-06-13T06:00:00-04:00",
        isDaytime: false,
        temperature: 59,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 100,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 19.444444444444443,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 90,
        },
        windSpeed: "7 to 14 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/night/tsra_hi,100/tsra_hi,20?size=medium",
        shortForecast:
          "Showers And Thunderstorms then Slight Chance Showers And Thunderstorms",
        detailedForecast:
          "Showers and thunderstorms before 8pm, then a slight chance of showers and thunderstorms between 8pm and 2am. Partly cloudy, with a low around 59. West wind 7 to 14 mph, with gusts as high as 20 mph. Chance of precipitation is 100%. New rainfall amounts between a half and three quarters of an inch possible.",
      },
      {
        number: 5,
        name: "Tuesday",
        startTime: "2023-06-13T06:00:00-04:00",
        endTime: "2023-06-13T18:00:00-04:00",
        isDaytime: true,
        temperature: 81,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 13.88888888888889,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 87,
        },
        windSpeed: "7 to 15 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/day/few?size=medium",
        shortForecast: "Sunny",
        detailedForecast:
          "Sunny, with a high near 81. West wind 7 to 15 mph, with gusts as high as 20 mph.",
      },
      {
        number: 6,
        name: "Tuesday Night",
        startTime: "2023-06-13T18:00:00-04:00",
        endTime: "2023-06-14T06:00:00-04:00",
        isDaytime: false,
        temperature: 62,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 12.222222222222221,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 75,
        },
        windSpeed: "14 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/night/sct?size=medium",
        shortForecast: "Partly Cloudy",
        detailedForecast: "Partly cloudy, with a low around 62.",
      },
      {
        number: 7,
        name: "Wednesday",
        startTime: "2023-06-14T06:00:00-04:00",
        endTime: "2023-06-14T18:00:00-04:00",
        isDaytime: true,
        temperature: 83,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 13.333333333333334,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 72,
        },
        windSpeed: "12 to 16 mph",
        windDirection: "SW",
        icon: "https://api.weather.gov/icons/land/day/sct/tsra_hi?size=medium",
        shortForecast:
          "Mostly Sunny then Slight Chance Showers And Thunderstorms",
        detailedForecast:
          "A slight chance of showers and thunderstorms after 2pm. Mostly sunny, with a high near 83.",
      },
      {
        number: 8,
        name: "Wednesday Night",
        startTime: "2023-06-14T18:00:00-04:00",
        endTime: "2023-06-15T06:00:00-04:00",
        isDaytime: false,
        temperature: 61,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 13.88888888888889,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 78,
        },
        windSpeed: "7 to 14 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/night/tsra_hi/sct?size=medium",
        shortForecast:
          "Slight Chance Showers And Thunderstorms then Partly Cloudy",
        detailedForecast:
          "A slight chance of showers and thunderstorms before 8pm. Partly cloudy, with a low around 61.",
      },
      {
        number: 9,
        name: "Thursday",
        startTime: "2023-06-15T06:00:00-04:00",
        endTime: "2023-06-15T18:00:00-04:00",
        isDaytime: true,
        temperature: 87,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 14.444444444444445,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 78,
        },
        windSpeed: "7 to 12 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/day/few/tsra_hi?size=medium",
        shortForecast: "Sunny then Slight Chance Showers And Thunderstorms",
        detailedForecast:
          "A slight chance of showers and thunderstorms after 2pm. Sunny, with a high near 87.",
      },
      {
        number: 10,
        name: "Thursday Night",
        startTime: "2023-06-15T18:00:00-04:00",
        endTime: "2023-06-16T06:00:00-04:00",
        isDaytime: false,
        temperature: 64,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 16.666666666666668,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 81,
        },
        windSpeed: "8 to 12 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/night/tsra_hi?size=medium",
        shortForecast: "Slight Chance Showers And Thunderstorms",
        detailedForecast:
          "A slight chance of showers and thunderstorms before 2am. Partly cloudy, with a low around 64.",
      },
      {
        number: 11,
        name: "Friday",
        startTime: "2023-06-16T06:00:00-04:00",
        endTime: "2023-06-16T18:00:00-04:00",
        isDaytime: true,
        temperature: 86,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 16.11111111111111,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 81,
        },
        windSpeed: "8 to 14 mph",
        windDirection: "NW",
        icon: "https://api.weather.gov/icons/land/day/few/tsra_hi?size=medium",
        shortForecast: "Sunny then Slight Chance Showers And Thunderstorms",
        detailedForecast:
          "A slight chance of showers and thunderstorms after 2pm. Sunny, with a high near 86.",
      },
      {
        number: 12,
        name: "Friday Night",
        startTime: "2023-06-16T18:00:00-04:00",
        endTime: "2023-06-17T06:00:00-04:00",
        isDaytime: false,
        temperature: 62,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: null,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 13.88888888888889,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 75,
        },
        windSpeed: "7 to 13 mph",
        windDirection: "NW",
        icon: "https://api.weather.gov/icons/land/night/tsra_hi/few?size=medium",
        shortForecast:
          "Slight Chance Showers And Thunderstorms then Mostly Clear",
        detailedForecast:
          "A slight chance of showers and thunderstorms before 8pm. Mostly clear, with a low around 62.",
      },
      {
        number: 13,
        name: "Saturday",
        startTime: "2023-06-17T06:00:00-04:00",
        endTime: "2023-06-17T18:00:00-04:00",
        isDaytime: true,
        temperature: 85,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 30,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 13.88888888888889,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 75,
        },
        windSpeed: "7 to 10 mph",
        windDirection: "W",
        icon: "https://api.weather.gov/icons/land/day/sct/rain_showers,30?size=medium",
        shortForecast: "Mostly Sunny then Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers after 2pm. Mostly sunny, with a high near 85. Chance of precipitation is 30%.",
      },
      {
        number: 14,
        name: "Saturday Night",
        startTime: "2023-06-17T18:00:00-04:00",
        endTime: "2023-06-18T06:00:00-04:00",
        isDaytime: false,
        temperature: 63,
        temperatureUnit: "F",
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: "wmoUnit:percent",
          value: 40,
        },
        dewpoint: {
          unitCode: "wmoUnit:degC",
          value: 16.11111111111111,
        },
        relativeHumidity: {
          unitCode: "wmoUnit:percent",
          value: 87,
        },
        windSpeed: "7 to 10 mph",
        windDirection: "SE",
        icon: "https://api.weather.gov/icons/land/night/rain_showers,40?size=medium",
        shortForecast: "Chance Rain Showers",
        detailedForecast:
          "A chance of rain showers. Mostly cloudy, with a low around 63. Chance of precipitation is 40%.",
      },
    ],
  },
};

export const mockForecast: Forecast[] = [
  {
    number: 1,
    name: "Today",
    startTime: "2023-06-14T09:00:00-04:00",
    endTime: "2023-06-14T18:00:00-04:00",
    isDaytime: true,
    temperature: 79,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 50,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 12.222222222222221,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 61,
    },
    windSpeed: "10 to 17 mph",
    windDirection: "SW",
    icon: "https://api.weather.gov/icons/land/day/rain_showers,50?size=medium",
    shortForecast: "Scattered Rain Showers",
    detailedForecast:
      "Scattered rain showers between 11am and 5pm. Mostly cloudy, with a high near 79. Southwest wind 10 to 17 mph, with gusts as high as 26 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible.",
  },
  {
    number: 2,
    name: "Tonight",
    startTime: "2023-06-14T18:00:00-04:00",
    endTime: "2023-06-15T06:00:00-04:00",
    isDaytime: false,
    temperature: 58,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 11.666666666666666,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 75,
    },
    windSpeed: "6 to 15 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/night/few?size=medium",
    shortForecast: "Mostly Clear",
    detailedForecast:
      "Mostly clear, with a low around 58. West wind 6 to 15 mph, with gusts as high as 23 mph. New rainfall amounts less than a tenth of an inch possible.",
  },
  {
    number: 3,
    name: "Thursday",
    startTime: "2023-06-15T06:00:00-04:00",
    endTime: "2023-06-15T18:00:00-04:00",
    isDaytime: true,
    temperature: 84,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 11.666666666666666,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 78,
    },
    windSpeed: "9 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/day/few?size=medium",
    shortForecast: "Sunny",
    detailedForecast: "Sunny, with a high near 84. West wind around 9 mph.",
  },
  {
    number: 4,
    name: "Thursday Night",
    startTime: "2023-06-15T18:00:00-04:00",
    endTime: "2023-06-16T06:00:00-04:00",
    isDaytime: false,
    temperature: 63,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 30,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 15,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 84,
    },
    windSpeed: "8 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/night/sct/rain_showers,30?size=medium",
    shortForecast: "Partly Cloudy then Chance Rain Showers",
    detailedForecast:
      "A chance of rain showers after 2am. Partly cloudy, with a low around 63. West wind around 8 mph. Chance of precipitation is 30%.",
  },
  {
    number: 5,
    name: "Friday",
    startTime: "2023-06-16T06:00:00-04:00",
    endTime: "2023-06-16T18:00:00-04:00",
    isDaytime: true,
    temperature: 83,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 40,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 16.666666666666668,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 84,
    },
    windSpeed: "8 to 15 mph",
    windDirection: "NW",
    icon: "https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,40?size=medium",
    shortForecast: "Chance Rain Showers",
    detailedForecast:
      "A chance of rain showers before 2pm, then a chance of showers and thunderstorms between 2pm and 5pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 83. Northwest wind 8 to 15 mph, with gusts as high as 22 mph. Chance of precipitation is 40%.",
  },
  {
    number: 6,
    name: "Friday Night",
    startTime: "2023-06-16T18:00:00-04:00",
    endTime: "2023-06-17T06:00:00-04:00",
    isDaytime: false,
    temperature: 61,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 40,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 13.88888888888889,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 81,
    },
    windSpeed: "9 to 15 mph",
    windDirection: "NW",
    icon: "https://api.weather.gov/icons/land/night/tsra_hi,40/few?size=medium",
    shortForecast: "Chance Showers And Thunderstorms then Mostly Clear",
    detailedForecast:
      "A chance of showers and thunderstorms before 8pm. Mostly clear, with a low around 61. Chance of precipitation is 40%.",
  },
  {
    number: 7,
    name: "Saturday",
    startTime: "2023-06-17T06:00:00-04:00",
    endTime: "2023-06-17T18:00:00-04:00",
    isDaytime: true,
    temperature: 83,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 13.88888888888889,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 81,
    },
    windSpeed: "9 to 14 mph",
    windDirection: "NW",
    icon: "https://api.weather.gov/icons/land/day/few?size=medium",
    shortForecast: "Sunny",
    detailedForecast: "Sunny, with a high near 83.",
  },
  {
    number: 8,
    name: "Saturday Night",
    startTime: "2023-06-17T18:00:00-04:00",
    endTime: "2023-06-18T06:00:00-04:00",
    isDaytime: false,
    temperature: 61,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 11.666666666666666,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 72,
    },
    windSpeed: "6 to 13 mph",
    windDirection: "NW",
    icon: "https://api.weather.gov/icons/land/night/few?size=medium",
    shortForecast: "Mostly Clear",
    detailedForecast: "Mostly clear, with a low around 61.",
  },
  {
    number: 9,
    name: "Sunday",
    startTime: "2023-06-18T06:00:00-04:00",
    endTime: "2023-06-18T18:00:00-04:00",
    isDaytime: true,
    temperature: 87,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 12.777777777777779,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 75,
    },
    windSpeed: "6 to 9 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/day/few?size=medium",
    shortForecast: "Sunny",
    detailedForecast: "Sunny, with a high near 87.",
  },
  {
    number: 10,
    name: "Sunday Night",
    startTime: "2023-06-18T18:00:00-04:00",
    endTime: "2023-06-19T06:00:00-04:00",
    isDaytime: false,
    temperature: 63,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 15.555555555555555,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 87,
    },
    windSpeed: "9 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/night/rain_showers?size=medium",
    shortForecast: "Slight Chance Rain Showers",
    detailedForecast:
      "A slight chance of rain showers after 8pm. Partly cloudy, with a low around 63.",
  },
  {
    number: 11,
    name: "Juneteenth",
    startTime: "2023-06-19T06:00:00-04:00",
    endTime: "2023-06-19T18:00:00-04:00",
    isDaytime: true,
    temperature: 84,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 50,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 17.22222222222222,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 87,
    },
    windSpeed: "8 to 13 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/day/rain_showers/tsra_hi,50?size=medium",
    shortForecast:
      "Slight Chance Rain Showers then Chance Showers And Thunderstorms",
    detailedForecast:
      "A slight chance of rain showers before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 84. Chance of precipitation is 50%.",
  },
  {
    number: 12,
    name: "Monday Night",
    startTime: "2023-06-19T18:00:00-04:00",
    endTime: "2023-06-20T06:00:00-04:00",
    isDaytime: false,
    temperature: 64,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 50,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 18.333333333333332,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 100,
    },
    windSpeed: "9 to 13 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/night/tsra_sct,50?size=medium",
    shortForecast: "Chance Showers And Thunderstorms",
    detailedForecast:
      "A chance of showers and thunderstorms before 8pm, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 64. Chance of precipitation is 50%.",
  },
  {
    number: 13,
    name: "Tuesday",
    startTime: "2023-06-20T06:00:00-04:00",
    endTime: "2023-06-20T18:00:00-04:00",
    isDaytime: true,
    temperature: 80,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 40,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 18.333333333333332,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 100,
    },
    windSpeed: "9 to 13 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/day/rain_showers,30/tsra_sct,40?size=medium",
    shortForecast: "Chance Rain Showers",
    detailedForecast:
      "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 80. Chance of precipitation is 40%.",
  },
  {
    number: 14,
    name: "Tuesday Night",
    startTime: "2023-06-20T18:00:00-04:00",
    endTime: "2023-06-21T06:00:00-04:00",
    isDaytime: false,
    temperature: 63,
    temperatureUnit: "F",
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: 40,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: 17.22222222222222,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 97,
    },
    windSpeed: "13 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/night/tsra_sct,40?size=medium",
    shortForecast: "Chance Showers And Thunderstorms",
    detailedForecast:
      "A chance of showers and thunderstorms. Mostly cloudy, with a low around 63. Chance of precipitation is 40%.",
  },
];
