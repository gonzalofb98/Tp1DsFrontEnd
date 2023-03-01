import axios from "axios";

export const getOrders = (setOrders) => {
    axios.get("https://localhost:7117/api/ControladorOrdenDeProduccion/OrdenesDeProduccion")
        .then((res) => {
            setOrders(res.data);
        });
}

export const getOrderByEmail = (email, setOp) => {
    axios.get(`https://localhost:7117/api/ControladorOrdenDeProduccion/ByUsuario?email=` + email)
        .then((res) => {
            setOp(res.data);
        });
}

export const changeStateByEmail = (email, setOp) => {
    axios.put(`https://localhost:7117/api/ControladorOrdenDeProduccion/ChangeEstado?email=` + email)
        .then((res) => {
            setOp(res.data);
        });
}

export const finishOpByEmail = (email) => {
    axios.put(`https://localhost:7117/api/ControladorOrdenDeProduccion/FinishOp?email=` + email)
        .then(() => {
        });
}

// export const putColors = (editedColor, setEditingColor, colors, setColors) => {
//     axios
//         .put(`https://localhost:7117/api/ControladorOrdenDeProduccion/${editedColor.id}`, editedColor)
//         .then((response) => {
//             setColors(colors.map((color) => (color.id === editedColor.id ? editedColor : color)));
//             setEditingColor(null);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

export const addOrder = async (order, setOp) => {
    const url = 'https://localhost:7117/api/ControladorOrdenDeProduccion/Create';
    await axios.post(url, order).then(async (res) => {
        setOp(res.data);
    }).catch((error) => {
        alert(error.response.data.errors[0]);
    })
}

export const deleteOrder = async (order) => {
    axios.delete(`https://localhost:7117/api/ControladorOrdenDeProduccion/Delete?id=${order.id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}