import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/Layout.css'

//on utilise un layout afin de définir la structure de base pour toutes les pages 
const Layout = () => {
    return (
        <div className="container">
            <Header /> 
            <main>
                <Outlet /> {/* Emplacement pour le contenu spécifique de chaque route */}
            </main>
            <Footer /> 
        </div>
    )       
};

export default Layout;
