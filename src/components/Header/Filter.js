import React from 'react';
import { Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DateRangePicker from "../Input/DatePicker/CustomDateRangePicker";
import CommonButton from "../Button/CommonButton/CommonButton"; // Import the common button
import './Filter.scss'; // Import the SCSS file
import { FilterFilled, FilterOutlined } from '@ant-design/icons';

function Filter({ dateRange, setDateRange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={2} className="filter">
                {/* Date Range Picker */}
                <Grid item xs={8}>
                    <DateRangePicker />
                </Grid>

                {/* Filter Button */}
                <Grid item xs={4}>
                    <CommonButton
                        type="primary"
                        icon={<FilterOutlined />}
                        onClick={() => console.log('Search clicked')}
                    >
                        Filter
                    </CommonButton>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Filter;