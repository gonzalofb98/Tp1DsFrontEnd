import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import ManageModels from '../../../components/Models/ManageModels';

const ManageModelsPage = () => {

    const navigate = useNavigate();

    return (
        <div >
            <MenuAppBar />
            <ManageModels />
        </div >
    );
}

export default ManageModelsPage;