import React, { useState } from 'react';
import { DatePicker } from 'antd';
import './CustomDateRangePicker.scss'; // Import the SCSS file for styling

const { RangePicker } = DatePicker;

function CustomDateRangePicker() {
    const [dates, setDates] = useState([]);

    const handleChange = (val) => {
        setDates(val);
        console.log('Selected Dates:', val);
    };

    return (
        <div className="custom-date-range-picker">
            <RangePicker
                value={dates}
                onChange={handleChange}
                allowClear
                placeholder={['Start Date', 'End Date']}
                className="date-range-picker"
            />
        </div>
    );
}

export default CustomDateRangePicker;