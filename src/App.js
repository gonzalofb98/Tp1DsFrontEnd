import './App.css';
import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import { UserContext, UserProvider } from './context/UserContext';
import AdministratorMenu from './pages/Administrator/AdministratorMenu';

function App() {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/administrator" element={user !== undefined ? <AdministratorMenu /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
