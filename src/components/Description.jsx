import "./description.scss";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop,MdCompress } from "react-icons/md";

import React from "react";

const Description = ({weather, units}) => {

  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <AiOutlineArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <AiOutlineArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];


  return (
    <>
      <div className="section section_desc">
        {
          cards.map(({id, icon, title, data, unit})=>(
            <div key={id} className="card">
          <div className="desc_card-icon">
            {icon}
            <small>{title}</small>
          </div>
            <h2>{`${data} ${unit}`}</h2>
        </div>

          ))
        }
      </div>
    </>
  );
};

export default Description;
