import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import TabPanel from './TabPanel';

const TabList = () => {
    const [hours, setHours] = useState(["8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM"]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        // Llamada a la API para obtener la lista de horas
        // axios.get('url_del_backend').then(response => {
        //     setHours(response.data);
        // });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                {hours.map((hour, index) => (
                    < Tab key={index} label={hour} />
                ))}
            </Tabs>
            {hours.map((hour, index) => (
                <TabPanel key={index} hour={hour} value={value} index={index} />
            ))}
        </div>
    );
};

export default TabList;