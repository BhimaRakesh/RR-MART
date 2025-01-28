import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Stores/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter basename="/RR-MART">
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
</BrowserRouter>
)