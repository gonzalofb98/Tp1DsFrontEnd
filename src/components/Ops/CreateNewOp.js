import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getColors } from "../../Services/ColorServices";
import { getModels } from "../../Services/ModelServices";


export default function CreateNewOP(props) {
    const line = props.line;
    const [nroOP, setNroOP] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [models, setModels] = useState([{ id: "", descripcion: "Seleccione una opción" }]);
    const [colors, setColors] = useState([{ id: "", descripcion: "Seleccione una opción" }]);

    useEffect(() => {
        getModels(setModels);
        getColors(setColors);
    }, []);

    const handleNroOPChange = event => setNroOP(event.target.value);
    const handleModeloChange = event => setModel(event.target.value);
    const handleColorChange = event => setColor(event.target.value);

    const handleCancelar = () => {
        setNroOP('');
        setModel('');
        setColor('');
    };

    const handleConfirmar = () => {
        const data = { nroOP, modelo: model, color, linea: line };
        console.log(data)
        axios.post('http://localhost:3000/ordenes', data)
            .then(response => console.log(response))
            .catch(error => console.error(error));
        handleCancelar();
    };

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="NroOP"
                    value={nroOP}
                    onChange={handleNroOPChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    select
                    label="Modelo"
                    value={model}
                    onChange={handleModeloChange}
                    SelectProps={{ native: true }}
                    InputLabelProps={{ shrink: true }}
                >
                    {models.map(m => (
                        <option key={m.id} value={m.descripcion}>
                            {m.descripcion}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    select
                    label="Color"
                    value={color}
                    onChange={handleColorChange}
                    SelectProps={{ native: true }}
                    InputLabelProps={{ shrink: true }}
                >
                    {colors.map(c => (
                        <option key={c.id} value={c.descripcion}>
                            {c.descripcion}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item sx={{ display: 'flex', gap: 2, m: 2, justifyContent: 'center' }}>
                    <Button variant="outlined" onClick={handleCancelar}>
                        Cancelar
                    </Button>
                </Grid>
                <Grid item sx={{ display: 'flex', gap: 2, m: 2, justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleConfirmar}>
                        Confirmar
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};
