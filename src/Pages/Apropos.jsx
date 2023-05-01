import React from 'react';
import bannerAbout from '../assets/bannerAbout.png';
import Banner from '../Components/Banner';
import Collapsible from "../Components/Collapsible";
import '../Styles/Apropos.css';

export default function Apropos() {
    // Création d'un tableau pour stocker les informations à afficher dans les "collapsibles"
    const infos = [
        {
            label: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            label: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            label: "Service",
            content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            label: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return(
        <> 
            <Banner 
                img={bannerAbout}
            />
           
            <div className="apropos_infos">
                {/* Utilisation d'une boucle pour générer les collapsibles à partir du tableau créer juste avant */}
                {infos.map((info, index) => (
                    <Collapsible key={index} label={info.label} className="apropos_infos_2">
                        <p>{info.content}</p>
                    </Collapsible>
                ))}
            </div>
        </>
    )
}
