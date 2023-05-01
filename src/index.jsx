import React from 'react'; // import de la librairie React
import ReactDOM from 'react-dom/client'; // import de ReactDOM, la librairie qui permet de rendre le code React dans le navigateur
import { 
  createBrowserRouter, // import de la fonction createBrowserRouter de la librairie react-router-dom
  RouterProvider, // import du composant RouterProvider de la librairie react-router-dom
} from 'react-router-dom';
import AppLayout from './Layout/AppLayout'; // import du composant AppLayout
import Home, { loader as homeLoader } from './Pages/Home'; // import du composant Home et du loader associé
import Accomodation, { loader as accomodationLoader } from './Pages/Accomodations'; // import du composant Accomodation et du loader associé
import About from './Pages/About'; // import du composant About
import NotFound from './Components/NotFound'; // import du composant NotFound

// Création de l'arbre de routes avec createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // le layout de l'application
    errorElement: <NotFound />, // le composant NotFound est utilisé si une erreur survient
    children: [ // les routes enfants
      {
        path: '/',
        element: <Home />, // la page d'accueil
        errorElement: <NotFound />, // le composant NotFound est utilisé si une erreur survient
        loader: homeLoader, // le loader associé à la page d'accueil
      },
      {
        path: '/Accomodations/:id',
        element: <Accomodation />, // la page d'hébergement
        errorElement: <NotFound />, // le composant NotFound est utilisé si une erreur survient
        loader: accomodationLoader, // le loader associé à la page d'hébergement
      },
      {
        path: '/About',
        element: <About />, // la page "à propos"
        errorElement: <NotFound />, // le composant NotFound est utilisé si une erreur survient
      },
      {
        path: '*',
        element: <NotFound />, // le composant NotFound est utilisé si aucune route ne correspond
      },
    ]
  }
]);

// Rendu de l'application dans l'élément avec l'ID 'root' du DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
