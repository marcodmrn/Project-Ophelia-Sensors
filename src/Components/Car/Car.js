import "./Car.css";
function Car({ data }) {
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
      <div className="car_more">
        <div>
          <ul>
            <li>
              <p></p> Marque : {data.marque}
            </li>
            <li>Classe : {data.classe}</li>
            <li>Energie : {data.energie}</li>
            <li>Moteur : {data["moteur-s"]}</li>
            <li>Vitesse Max : {data["vitesse-maximale"]}</li>
            <li>Boite de vitesse : {data["boite-de-vitesses"]}</li>
            <li>Carrosserie : {data["carrosserie-s"]}</li>
            <li>Puissance : {data["puissance-maximale"]}</li>
            <li>{data.acceleration}</li>
          </ul>
        </div>
        <div>
          <ul>
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
      <div className="car_power">
        <p>Puissance : {data.puissancemaximale} </p>
      </div>
    </div>
  );
}

export default Car;