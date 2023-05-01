import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom';
import Layout from './Layout/Layout'; 
import Home, { loader as homeLoader } from './Pages/Home'; 
import Accomodation, { loader as accomodationLoader } from './Pages/Hebergements'; 
import About from './Pages/Apropos'; 
import CantFind from './Components/CantFind'; 

// Création des routes en arborescence 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    errorElement: <CantFind />, // si une erreur survient
    children: [ // les enfants
      {
        path: '/',
        element: <Home />, 
        errorElement: <CantFind />, // si une erreur survient
        loader: homeLoader, 
      },
      {
        path: '/Accomodations/:id',
        element: <Accomodation />, 
        errorElement: < CantFind />, // si une erreur survient
        loader: accomodationLoader, 
      },
      {
        path: '/About',
        element: <About />, 
        errorElement: <CantFind />, // si une erreur survient
      },
      {
        path: '*',
        element: <CantFind />, // si aucune route ne correspond
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
