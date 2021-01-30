import "./Characteristics.css";
import { useState, useEffect } from "react";
import response from "../../data.json";

function Characteristics({ data, togglePopup }) {
  const [car, setCar] = useState([]);

  useEffect(() => {
    /* getCarsData().then((res) => {
      setData(res);
    }); */
    setCar(response);
  }, [setCar]);

  return (
    <div class="characteristics_popup">
      <button className="characteristics_button" onClick={() => togglePopup()}>
        X
      </button>
      <div className="characteristics_content">
        <h3> Fiche Technique </h3>
        <ul>
          <li>Marque: {data.marque}</li>
          <li>Classe : {data.classe}</li>
          <li>Energie : {data.energie}</li>
          <li>Moteur : {data["moteur-s"]}</li>
          <li>Vitesse Max : {data["vitesse-maximale"]}</li>
          <li>Boite de vitesse : {data["boite-de-vitesses"]}</li>
          <li>Carrosserie : {data["carrosserie-s"]}</li>
          <li>Puissance : {data["puissance-maximale"]}</li>
          <li>{data.acceleration}</li>
          <li>Année de production : {data["annees-de-production"]}</li>
          <li>Usine d'assemblage : {data["usine-s-dassemblage"]}</li>
          <li>Production : {data.production}</li>
          <li>Poids : {data["poids-a-vide"]}</li>
          <li>Consomation : {data["consommation-mixte"]}</li>
          <li>Cylindrée : {data.cylindree}</li>
          <li>Émission de Co2 : {data["emission-de-co2"]}</li>
          <li>Couple maximale : {data["couple-maximale"]}</li>
          <li>Position du moteur : {data["position-du-moteur"]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Characteristics;
