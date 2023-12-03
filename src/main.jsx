import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { App } from './App.jsx'
import { store } from './store';
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter } from 'react-router-dom';
import { PatientForm } from './components/patient-form/patient-form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <PatientForm />
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
