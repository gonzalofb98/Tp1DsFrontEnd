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

    useEffect(() => {
        getLineById(lineId, setLine);
    }, [line]);

    const handleOrderAdded = () => {
        line.estado = 1;
    };

    const back = () => {
        navigate("/menu");
    };

    return (
        <div>
            <MenuAppBar />
            {(line.estado === 0) ? <CreateNewOP line={line} onOrderAdded={handleOrderAdded} /> : <ExistingOP line={line} />}
            <Grid container justifyContent="center">
                <Button onClick={back} variant="contained">Volver</Button>
            </Grid>
        </div >
    );
}

export default LineSupervisorMenu;