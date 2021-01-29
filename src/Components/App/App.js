import "./App.css";
import { useState, useEffect } from "react";
// import { getCarsData } from "../../service/service";
import response from "../../data.json";
import Car from "../Car/Car";
import Header from "../Header/Header";

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
      {data.map((car) => (
        <Car data={car} />
      ))}
    </div>
  );
}

export default App;
