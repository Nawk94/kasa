import React from 'react';
import hebergements from '../logements.json';
import { useParams, useLoaderData } from 'react-router-dom';
import Carousel from '../Components/Lecarousel';
import Rating from '../Components/Score';
import Wrap from '../Components/Wrap';
import '../Styles/Hebergements.css';

// La fonction loader renvoie les données du fichier logements.json
export async function loader() {
    return hebergements;
}

export default function Logement() {
    const accomodations = useLoaderData();

    // on extrait les paramètres de l'URL
    const params = useParams();

    // on trouve l'hébergement correspondant à l'ID dans les paramètres 
    const accomodationInfos = accomodations.find(accomodation =>
        accomodation.id === params.id
    );

    // on affiche les tags de l'hébergement
    const tagsAccomodation = accomodationInfos.tags.map((tag, index) => {
        return <li key={index}>{tag}</li>;
    });

    // on affiche les équipements de l'hébergement
    const equipmentAccomodation = accomodationInfos.equipments.map((equipment, index) => {
        return <p key={index}>{equipment}</p>;
    });

    return (
        <>
            <div className="accomodation" key={accomodationInfos.id}>
                {/* on affiche les images de l'hébergement */}
                <Carousel images={accomodationInfos.pictures} />

                {/* Les informations sur l'hébergement */}
                <div className="infos">
                    <h1>{accomodationInfos.title}</h1>

                    <div className="infos_first">
                        <div className="location">{accomodationInfos.location}</div>

                        {/* on affiche les tags de l'hébergement */}
                        <ul>{tagsAccomodation}</ul>
                    </div>

                    {/* Les informations sur l'hôte */}
                    <div className="infos_2nd">
                        <div className="host">
                            <span className="name">{accomodationInfos.host.name}</span>
                            <div className="pic">
                                <img src={accomodationInfos.host.picture} alt="hôte" />
                            </div>
                        </div>

                        {/* on affiche la note de l'hébergement */}
                        <div className="rating">
                            <Rating rating={accomodationInfos.rating} />
                        </div>
                    </div>
                </div>

                {/* on affiche la description et les équipements de l'hébergement */}
                <div className="infos_3rd">
                    <Wrap label="Description" className="infos_3rd_title">
                        <p>{accomodationInfos.description}</p>
                    </Wrap>
                    <Wrap label="Equipments" className="infos_3rd_title">
                        <p className="infos_3rd_equipment">{equipmentAccomodation}</p>
                    </Wrap>
                </div>
            </div>
        </>
    );
}