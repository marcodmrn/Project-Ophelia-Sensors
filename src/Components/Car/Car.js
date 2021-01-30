import "./Car.css";
import { useState } from "react";
import Characteristics from "../Characteristics/Characteristics";
// import { closePop } from "../Characteristics/Characteristics";
function Car({ data }) {
  const [show, setShow] = useState(false);

  const togglePopup = () => {
    setShow(!show);
  };

  return (
    <div className="car">
      <div className="car_content">
        <h1 className="car_name">{data.name}</h1>
        <div className="car_img">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="car_desc">
          <h4>Description :</h4>
          <p> {data.description} </p>
        </div>
        <button className="car_button" onClick={togglePopup}>
          En savoir plus
        </button>
        {show ? (
          <Characteristics data={data} togglePopup={togglePopup} />
        ) : null}
      </div>
    </div>
  );
}

export default Car;
