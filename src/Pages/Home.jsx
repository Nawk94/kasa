import React, { useEffect, useState } from 'react';
import hebergements from '../logements.json';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import bannerHome from '../assets/banner_home.png';
import Card from '../components/Card';
import '../styles/Home.css';

// On récupère les données 
export async function loader() {
  return hebergements;
}

const Home = () => {
  // On utilise useState pour gérer l'état des hébergements
  const [accommodationsData, setAccommodationsData] = useState([]);

  // On utilise useEffect pour récupérer les données des hébergements au chargement de la page
  useEffect(() => {
    async function fetchData() {
      const data = await loader();
      setAccommodationsData(data);
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
      {accommodationsData.length > 0 ? (
        <div className="accommodations">
          {accommodationsData.map((accommodation) => (
            <Link key={`link${accommodation.id}`} to={`/Accommodations/${accommodation.id}`}>
              <Card key={`card${accommodation.id}`} img={accommodation.cover} title={accommodation.title} />
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
