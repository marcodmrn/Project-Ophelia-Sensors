import "./App.css";
import { useState, useEffect } from "react";
// import { getCarsData } from "../../service/service";
import response from "../../data.json";
import Car from "../Car/Car";

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
      {data.map((car) => (
        <Car data={car} />
      ))}
    </div>
  );
}

export default App;
