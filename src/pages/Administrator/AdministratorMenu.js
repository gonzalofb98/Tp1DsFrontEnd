import React from 'react';
import './AdministratorMenu.css';
import MenuAppBar from '../../components/Navbar/MenuAppBar'
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const AdministratorMenu = () => {

    const navigate = useNavigate();

    return (
        <div >
            <MenuAppBar />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}>
                <Button sx={{ p: 1, m: 1 }} variant="contained" onClick={navigate("/ManageModels")}>Gestionar Modelos</Button>
                <Button sx={{ p: 1, m: 1 }} variant="contained" onClick={navigate("/ManageColors")}>Gestionar Colores</Button>
                <Button sx={{ p: 1, m: 1 }} variant="contained" onClick={navigate("/ManageUsers")}>Gestionar Usuarios</Button>
                <Button sx={{ p: 1, m: 1 }} variant="contained" onClick={navigate("/Lights")}>Consultar Semáforos</Button>
            </Box>
        </div >
    );
}

export default AdministratorMenu;