import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import NiceModal from '@ebay/nice-modal-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <ToastContainer position="top-center" />
    <NiceModal.Provider />
  </React.StrictMode>
)
