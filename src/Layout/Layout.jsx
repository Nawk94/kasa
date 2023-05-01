import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styles/Layout.css'

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
