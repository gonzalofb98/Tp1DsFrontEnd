import './App.css';
import React, { useContext, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import { DataContext, DataProvider } from './context/DataContext';

function App() {
  const user = useContext(DataContext);
  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={user === undefined ? <Menu /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
