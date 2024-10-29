/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './components/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={Router} />

  </StrictMode>,
)
