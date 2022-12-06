import Button from '@mui/material/Button';

const Menu = () => {
    return (
        <container align="center">
            <div >
                <Button variant="contained" color="primary" disableElevation>Gestión de Modelos</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation>Gestión de Colores</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation>Gestión de Usuarios</Button>
            </div>
        </container>
    );
}

export default Menu;