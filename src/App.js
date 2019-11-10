import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Routes />
    </>
  );
}

export default App;
