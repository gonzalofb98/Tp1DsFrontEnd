import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getModels } from "../../Services/ModelServices";

export default function ManageModels() {
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getModels(setModels);
  }, []);

  return (
    < div >
      {console.log(models)}
      pagina para modelos
    </div >
  )
};
