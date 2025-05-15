import React from 'react';
import { Box, Typography } from '@mui/material';
import Filter from './Filter'; // Import the new Filter component

function ContentHeader({ startDate, endDate, setStartDate, setEndDate, screenName }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#f5f5f5',
            }}
        >
            {/* Screen Name */}
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {screenName}
            </Typography>

            {/* Filter Section */}
            <Filter
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
        </Box>
    );
}

export default ContentHeader;