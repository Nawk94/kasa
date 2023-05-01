import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styles/Layout.css'

const AppLayout = () => {
    return (
        <div className="container">
            <Header /> {/* Composant pour l'en-tête */}
            <main>
                <Outlet /> {/* Emplacement réservé pour le contenu spécifique à chaque route */}
            </main>
            <Footer /> {/* Composant pour le pied de page */}
        </div>
    )       
};

export default AppLayout;
