import axios from "axios";

export const getLines = (setLineas) => {
    axios.get("https://localhost:7117/api/ControladorLineas/Lines")
        .then((res) => {
            setLineas(res.data);
        });
}