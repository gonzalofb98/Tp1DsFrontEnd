import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuAppBar from '../../components/Navbar/MenuAppBar'
import CreateNewOP from '../../components/Ops/CreateNewOp';
import ExistingOP from '../../components/Ops/ExistingOP';
import { getLineById } from '../../Services/lineServices';

const LineSupervisorMenu = () => {
    const { lineId } = useParams();
    const navigate = useNavigate();
    const [line, setLine] = useState({});
    const estados = {
        0: 'Libre',
        1: 'Ocupada',
    }

    useEffect(() => {
        getLineById(lineId, setLine);
    }, []);

    const back = () => {
        navigate("/menu");
    }
    return (
        <div>
            {
                console.log(line)
            }
            <MenuAppBar />
            {(line.estado === 0) ? <CreateNewOP line /> : <ExistingOP line />}
            <Grid container justifyContent="center">
                <Button onClick={back} variant="contained">Volver</Button>
            </Grid>
        </div >
    );
}

export default LineSupervisorMenu;