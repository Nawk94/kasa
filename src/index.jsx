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
    element: <AppLayout />, 
    errorElement: <NotFound />, // si une erreur survient
    children: [ // les enfants
      {
        path: '/',
        element: <Home />, 
        errorElement: <NotFound />, // si une erreur survient
        loader: homeLoader, // 
      },
      {
        path: '/Accomodations/:id',
        element: <Accomodation />, 
        errorElement: <NotFound />, // si une erreur survient
        loader: accomodationLoader, 
      },
      {
        path: '/About',
        element: <About />, 
        errorElement: <NotFound />, // si une erreur survient
      },
      {
        path: '*',
        element: <NotFound />, // si aucune route ne correspond
      },
    ]
  }
]);

// le DOM 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
