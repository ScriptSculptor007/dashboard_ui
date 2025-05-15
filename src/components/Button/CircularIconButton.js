import React from 'react';
import { IconButton, Box } from '@mui/material';

import './CircularIconButton.scss'; // Import the SCSS file

function CircularIconButton({ icon, onClick, tooltip }) {
    return (
        <Box className="circular-icon-button">
            <IconButton onClick={onClick} className="icon-button">
                {icon}
            </IconButton>
        </Box>
    );
}

export default CircularIconButton;