import React, { useState } from 'react'

import './App.css'
import UsersManagment from './pages/UsersManagment/UsersManagment'
import Loader from './components/loader/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      {loading ? <Loader /> :
      <>
        <h1>Manejo de Usuarios</h1>
        <UsersManagment setLoading={setLoading} />
      </>
      }
    </div>
  )
}

export default App
