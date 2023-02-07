import axios from "axios";

export const getModels = (setModels) => {
    axios.get("https://localhost:7117/ControladorModelos/Models")
        .then((res) => {
            setModels(res.data);
        });
}