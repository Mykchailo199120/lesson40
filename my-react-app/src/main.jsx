import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ControlledForm from "./ControlledForm.jsx";
import UncontrolledForm from "./UncontrolledForm.jsx";
import DataFetcher from "./DataFetcher.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ControlledForm />
      <UncontrolledForm />
      <DataFetcher />
      <App></App>
  </StrictMode>
)
