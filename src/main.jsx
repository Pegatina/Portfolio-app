import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PortfolioApp} from './PortfolioApp';

const router = createBrowserRouter([
  {
    path: "*",
    element: <PortfolioApp/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
  <RouterProvider 
  router={router}
   future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
  />  
  </React.StrictMode>,
)