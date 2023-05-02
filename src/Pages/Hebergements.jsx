import React from 'react';
import hebergements from '../logements.json';
import { useParams, useLoaderData } from 'react-router-dom';
import Carousel from '../Components/Lecarousel';
import Rating from '../Components/Score';
import Wrap from '../Components/Wrap';
import '../Styles/Hebergements.css';

// Loader renvoie les données du fichier logements.json
export async function loader() {
    return hebergements;
}

export default function Logement() {
    const accommodations = useLoaderData();

    // on extrait les paramètres de l'URL
    const params = useParams();

    // on trouve l'hébergement correspondant à l'ID dans les paramètres 
    const accommodationInfos = accommodations.find(accommodation =>
        accommodation.id === params.id
    );

    // on affiche les tags de l'hébergement
    const tagsAccommodation = accommodationInfos.tags.map((tag, index) => {
        return <li key={index}>{tag}</li>;
    });

    // on affiche les équipements de l'hébergement
    const equipmentAccommodation = accommodationInfos.equipments.map((equipment, index) => {
        return <p key={index}>{equipment}</p>;
    });

    return (
        <>
            <div className="accommodation" key={accommodationInfos.id}>
                {/* on affiche les images de l'hébergement */}
                <Carousel images={accommodationInfos.pictures} />

                {/* Les informations sur l'hébergement */}
                <div className="infos">
                    <h1>{accommodationInfos.title}</h1>

                    <div className="infos_first">
                        <div className="location">{accommodationInfos.location}</div>

                        {/* on affiche les tags de l'hébergement */}
                        <ul>{tagsAccommodation}</ul>
                    </div>

                    {/* Les informations sur l'hôte */}
                    <div className="infos_2nd">
                        <div className="host">
                            <span className="name">{accommodationInfos.host.name}</span>
                            <div className="pic">
                                <img src={accommodationInfos.host.picture} alt="hôte" />
                            </div>
                        </div>

                        {/* on affiche la note de l'hébergement */}
                        <div className="rating">
                            <Rating rating={accommodationInfos.rating} />
                        </div>
                    </div>
                </div>

                {/* on affiche la description et les équipements de l'hébergement */}
                <div className="infos_3rd">
                    <Wrap label="Description" className="infos_3rd_title">
                        <p>{accommodationInfos.description}</p>
                    </Wrap>
                    <Wrap label="Equipments" className="infos_3rd_title">
                        <p className="infos_3rd_equipment">{equipmentAccommodation}</p>
                    </Wrap>
                </div>
            </div>
        </>
    );
}