import './App.css';
import React, { useContext } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/login/Login';
import { UserContext } from './context/UserContext';
import LinesMenu from './pages/Lineas/LinesMenu';
import AdministratorMenu from "./pages/Administrator/AdministratorMenu";

function App() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={user === undefined ? navigate("/") : <LinesMenu />} />´
        <Route path="/LineSupervisorMenu" element={<AdministratorMenu />} />
        <Route path="/QualitySupervisorMenu" element={<AdministratorMenu />} />
        <Route path="/AdministratorMenu" element={<AdministratorMenu />} />
      </Routes>
    </div>
  );
}

export default App;
