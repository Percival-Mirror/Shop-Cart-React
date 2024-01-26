import React from 'react'
import ReactDOM from 'react-dom/client'
import { Shopcar } from './components/ShopcartApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Shopcar />
    </React.StrictMode>
  </BrowserRouter>
)
