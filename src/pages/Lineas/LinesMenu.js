import React, { useState, useContext } from 'react';
import MenuAppBar from '../../components/Navbar/MenuAppBar';
import OutlinedCard from '../../components/Card/Card';
import { Grid } from '@mui/material';
import { getLines } from '../../Services/lineServices';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';



const LinesMenu = () => {
    const [lineas, setLineas] = useState([]);
    const navigate = useNavigate();
    var { user, setUser } = useContext(UserContext);

    const userRol = {
        1: "/LineSupervisorMenu",
        2: "/QualitySupervisorMenu",
        3: "/AdministratorMenu"
    }

    useEffect(() => {
        getLines(setLineas);
    }, []);

    function accessLine() {
        navigate(userRol[user.rol] || "/")
    }

    return (
        <div>
            <MenuAppBar />
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 2 }}>
                    {[...lineas].map(x => (
                        < Grid item xs={6}>
                            <div onClick={accessLine} >{OutlinedCard(x)}</div>
                        </Grid>))
                    }
                </Grid>
            </div>
        </div >
    );
}

export default LinesMenu;