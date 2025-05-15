import React from 'react';
import { Button } from 'antd';
import './CommonButton.scss'; // Import the SCSS file for styling

function CommonButton({ type = 'primary', icon, iconPosition = 'left', onClick, children, className = '', ...props }) {
    return (
        <Button
            type={type}
            onClick={onClick}
            className={`common-button ${className}`}
            {...props}
        >
            {iconPosition === 'left' && icon}
            {children && <span className="button-text">{children}</span>}
            {iconPosition === 'right' && icon}
        </Button>
    );
}

export default CommonButton;