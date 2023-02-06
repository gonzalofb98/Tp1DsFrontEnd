import React from 'react';
import Button from '@mui/material/Button';
import './AdministratorMenu.css';
import MenuAppBar from '../../components/Navbar/MenuAppBar'

const AdministratorMenu = () => {
    const names = ['Gestionar Modelos', 'Gestionar Colores', 'Gestionar Usuarios'];
    return (
        <div>
            <MenuAppBar pages={names} />
            {/* <div className="divMenu">
                <container>
                    {
                        names.map(name => {
                            return (
                                < div>
                                    <Button variant="contained" color="primary" disableElevation>{name}</Button>
                                </div >
                            )
                        })
                    }
                </container >
            </div > */}
        </div>
    );
}

export default AdministratorMenu;