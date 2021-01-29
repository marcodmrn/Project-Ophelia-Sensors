import "./Car.css";
import { useState } from "react";
import Characteristics from "../Characteristics/Characteristics";
function Car({ data }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="car">
      <div className="car_info">
        <div className="car_name">
          <h1>{data.name}</h1>
        </div>
        <div className="car_img">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="car_desc">
          <p> {data.description} </p>
        </div>
      </div>
      <div>
        <p>
          <button className="button_desc" onClick={handleClick}>
            Show more characteristics
          </button>
        </p>
      </div>
      <div>{show ? <Characteristics data={data} /> : null}</div>
    </div>
  );
}

export default Car;
