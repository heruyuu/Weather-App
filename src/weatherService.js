const API_KEY = "a8a06ff451b531a04fa693a9a51d527f";
const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

export const weatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  // console.log(data);

  const {
    weather,
    main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    feels_like,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    speed,
    country,
    name,
  };
};
