import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Views
import Products from './views/products';
import Users from './views/users';
import Orders from './views/orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
          <Route path="usuarios" element={<Users />} />
          <Route path="productos" element={<Products />} />
          <Route path="ordenes" element={<Orders />} />

        </Route>
      </Routes>
  </BrowserRouter>
);