import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom';
import Layout from './Layout/Layout'; 
import Home, { loader as HomeLoader } from './Pages/Home'; 
import Accommodation, { loader as AccommodationLoader } from './Pages/Hebergements'; 
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
        loader: HomeLoader, 
      },
      {
        path: '/Accommodations/:id',
        element: <Accommodation />, 
        errorElement: < CantFind />, // si une erreur survient
        loader: AccommodationLoader, 
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
