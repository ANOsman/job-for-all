import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CareersContextProvider } from './context/CareersContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CareersContextProvider>
      <App />
    </CareersContextProvider>
  </React.StrictMode>
)