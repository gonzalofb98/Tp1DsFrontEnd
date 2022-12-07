import './App.css';
import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import { DataContext, DataProvider } from './context/DataContext';
import AdministratorMenu from './pages/Administrator/AdministratorMenu';

function App() {
  const user = useContext(DataContext);
  console.log("usuario en app")

  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/administrator" element={user === undefined ? <AdministratorMenu /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
