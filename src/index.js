import React from 'react';
import ReactDOM from 'react-dom/client';

import {Route, Routes, BrowserRouter} from 'react-router-dom'

import './index.css';
import Basket from './components/Basket';
import Home from './components/Home';
import Products from './components/Products';
import Support from './components/Support';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/suport" element={<Support />} />
        <Route path="/telefoane" element={Products("Telefoane")} />
        <Route path="/tablete" element={Products("Tablete")} />
        <Route path="/laptop" element={Products("Laptop")} />
        <Route path="/desktop" element={Products("Desktop")} />
        <Route path="/tv" element={Products("TV")} />
        <Route path="/audio" element={Products("Audio")} />
        <Route path="/foto" element={Products("Foto")} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
