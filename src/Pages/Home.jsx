import React, { useEffect, useState } from 'react';
import hebergements from '../logements.json';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import bannerHome from '../assets/bannerHome.png';
import Card from '../Components/Card';
import '../Styles/Home.css';

// On récupère les données de manière asynchrone
export async function loader() {
  return hebergements;
}

const Home = () => {
  // On utilise useState pour gérer l'état des hébergements
  const [accomodationsData, setAccomodationsData] = useState([]);

  // On utilise useEffect pour récupérer les données des hébergements au chargement de la page
  useEffect(() => {
    async function fetchData() {
      const data = await loader();
      setAccomodationsData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="home">
        <h1>Chez vous, partout et ailleurs</h1>
        <Banner img={bannerHome} />
      </div>

      {/* Si on a des hébergements, on les affiche */}
      {accomodationsData.length > 0 ? (
        <div className="accomodations">
          {accomodationsData.map((accomodation) => (
            <Link key={`link${accomodation.id}`} to={`/Accomodations/${accomodation.id}`}>
              <Card key={`card${accomodation.id}`} img={accomodation.cover} title={accomodation.title} />
            </Link>
          ))}
        </div>
      ) : (
        // Sinon, on affiche un message
        <p>Il n'y a pas d'hébergement pour le moment</p>
      )}
    </>
  );
};

export default Home;
