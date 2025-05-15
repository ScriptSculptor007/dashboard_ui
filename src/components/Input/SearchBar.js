import React from 'react';
import { Input, Tooltip, Button } from 'antd';
import { SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './SearchBar.scss'; // Import the SCSS file

function SearchBar({ placeholder = "Search items in claims only", onSearch }) {
    return (
        <div className="search-bar">
            <Input
                placeholder={placeholder}
                allowClear
                suffix={
                    <Tooltip title="Search for items or information">
                        <InfoCircleOutlined className="info-icon" />
                    </Tooltip>
                }
                onPressEnter={(e) => onSearch && onSearch(e.target.value)}
                className="search-input"
            />
            <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={() => onSearch && onSearch()}
                className="search-button"
            >
                Search
            </Button>
        </div>
    );
}

export default SearchBar;