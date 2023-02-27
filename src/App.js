import './App.css';
import React, { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Login from './components/login/Login';
import LinesMenu from './pages/Lineas/LinesMenu';
import AdministratorMenu from "./pages/Administrator/AdministratorMenu";
import LineSupervisorMenu from './pages/LineSupervisorMenu/LineSupervisorMenu';
import ManageModelsPage from './pages/Administrator/ManageModels/ManageModelsPage';
import ManageColorsPage from './pages/Administrator/ManageColors/ManageColorsPage';
import ManageDefectsPage from './pages/Administrator/ManageDefects/ManageDefectsPage';
import ManageLinesPage from './pages/Administrator/ManageLines/ManageLinesPage';

import { UserContext } from './context/UserContext';

function App() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={user === undefined ? navigate("/") : <LinesMenu />} />´
        <Route path="/LineSupervisorMenu/LineId/:lineId" element={<LineSupervisorMenu />} />
        <Route path="/QualitySupervisorMenu" element={<AdministratorMenu />} />
        <Route path="/AdministratorMenu" element={<AdministratorMenu />} />
        <Route path="/ManageModels" element={<ManageModelsPage />} />
        <Route path="/ManageColors" element={<ManageColorsPage />} />
        <Route path="/ManageDefects" element={<ManageDefectsPage />} />
        <Route path="/ManageLines" element={<ManageLinesPage />} />
      </Routes>
    </div>
  );
}

export default App;
