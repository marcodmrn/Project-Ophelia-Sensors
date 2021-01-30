import Masonry from "react-masonry-component";
import "./App.css";
import { useState, useEffect } from "react";
// import { getCarsData } from "../../service/service";
import response from "../../data.json";
import Car from "../Car/Car";
import Header from "../Header/Header";
import Title from "../Title/Title";

const masonryOptions = {
  transitionDuration: 0,
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    /* getCarsData().then((res) => {
      setData(res);
    }); */
    setData(response);
  }, [setData]);

  return (
    <div className="App">
      <Header />
      <div className="container_cars">
        <Title />
        <Masonry options={masonryOptions}>
          {data.map((car, i) => (
            <Car data={car} key={i} />
          ))}
        </Masonry>
      </div>
      {/* <div className="component_car">
        {data.map((car) => (
          <Car data={car} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
