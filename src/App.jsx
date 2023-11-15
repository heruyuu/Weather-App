import React, { useEffect, useState } from "react";
import hotBg from "./assets/hot.jpg";
import coolBg from "./assets/cool.jpg";
import Description from "./components/Description";
import { weatherData } from "./weatherService";

const App = () => {
  const [city, setCity] = useState("Agartala");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchData = async () => {
      const data = await weatherData(city, units);
      // console.log(data);
      setWeather(data);

      //dynamic bg
      const tempR = units === "metric" ? 20 : 60;
      if (data.temp <= tempR) {
        setBg(coolBg);
      } else {
        setBg(hotBg);
      }
    };

    fetchData();
  }, [city, units]);

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.target.value);
      e.target.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section_inputs">
            {/* <button>°C</button> */}
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter city..."
              />

              
            </div>
            <div className="section section_temp">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={`${weather.iconURL}`} alt="" />
                <h3>{`${weather.description}`}</h3>
              </div>
              <div className="temperature">
                <h1>
                  {`${weather.temp.toFixed()} °${
                    units === "metric" ? "C" : "F"
                  }`}{" "}
                </h1>
              </div>
            </div>

            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
