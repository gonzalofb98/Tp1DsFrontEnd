import React, { useEffect, useState } from 'react';

const TabPanel = ({ hour, value, index }) => {

    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && (
                <div>
                    <h2>{hour}</h2>
                    <p>Contenido de la pestaña</p>

                </div>
            )}
        </div>
    );
};

export default TabPanel;