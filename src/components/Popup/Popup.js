import React from 'react';
import { Popover, Alert, Button, Typography, Divider } from 'antd';
import { CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './Popup.scss'; // Use your existing styles or adapt as needed

function NotificationPopup({ notifications, onCloseNotification, open, onClose, children }) {
    const content = (
        <div className="notification-popup">
            <Typography.Title level={5} className="notification-title">
                Notifications
            </Typography.Title>
            {notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                    <div>
                        <div className="notification-content">
                            <Typography.Text className="notification-message">
                                {notification.message}
                            </Typography.Text>
                            <Typography.Text className="notification-date" type="secondary">
                                {notification.date}
                            </Typography.Text>
                        </div>
                        {index < notifications.length - 1 && <Divider className="divider" />}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            open={open}
            onOpenChange={(visible) => {
                if (!visible) onClose();
            }}
        >
            {children}
        </Popover>
    );
}

export default NotificationPopup;