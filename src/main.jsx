import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Panggil Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Panggil Style Css
import './dist/css/style.css';
// panggil ReactRouter (untuk mencari Routes)
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Panggil BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
