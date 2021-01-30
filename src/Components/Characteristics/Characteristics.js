import "./Characteristics.css";

function Characteristics({ data, togglePopup }) {
  console.log(data.keys);
  return (
    <div className="characteristics_popup">
      <button className="characteristics_button" onClick={() => togglePopup()}>
        X
      </button>
      <div className="characteristics_content">
        <h3> Fiche Technique </h3>
        <ul>
          {Object.keys(data).map(
            (key) =>
              key !== "name" &&
              key !== "description" &&
              key !== "img" && (
                <li key={key}>
                  <span>{key} : </span>
                  {data[key]}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Characteristics;
