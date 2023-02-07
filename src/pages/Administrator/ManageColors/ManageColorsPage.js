import React from 'react';
import MenuAppBar from '../../../components/Navbar/MenuAppBar'
import { useNavigate } from 'react-router-dom';
import ManageColors from '../../../components/Colors/ManageColors';

const ManageColorsPage = () => {

    const navigate = useNavigate();

    return (
        <div >
            <MenuAppBar />
            <ManageColors />
        </div >
    );
}

export default ManageColorsPage;