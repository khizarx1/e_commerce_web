import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CustomRoutes from './pages/Routes'

function App() {

  return (
    <BrowserRouter>
        <CustomRoutes />
    </BrowserRouter>
  )
}

export default App
