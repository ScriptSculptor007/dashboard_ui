import React, { useState, useEffect } from 'react';
import { Layout, Menu, Typography, Badge, Button, Drawer as AntDrawer } from 'antd';
import { MenuOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import SearchBar from './Input/SearchBar'; // Adjust the import path as necessary
import NotificationPopup from './Popup/Popup'; // Import the updated component
import ContentHeader from './Header/ContentHeader'; // Import the new component
import './HomeScreen.scss'; // Adjust the import path as necessary

const { Header, Sider, Content } = Layout;

function HomeScreen() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [notifications, setNotifications] = useState(generateRandomNotifications());
    const [popupOpen, setPopupOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNotificationClick = () => {
        setPopupOpen((prev) => !prev);
    };

    const handleNotificationClose = (index) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((_, i) => i !== index)
        );
    };

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    if (isMobile) {
        return (
            <div className="mobile-view">
                <Typography.Title level={4} type="danger" style={{ textAlign: 'center' }}>
                    Please view this dashboard on a desktop or tablet for the best experience.
                </Typography.Title>
            </div>
        );
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider
                collapsible
                collapsed={!isSidebarOpen}
                onCollapse={toggleSidebar}
                style={{
                    backgroundColor: '#1c2d50',
                    color: 'white',
                }}
            >
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={toggleSidebar}
                    style={{ color: 'white' }}
                />
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{ backgroundColor: '#1c2d50', color: 'white' }}
                    items={[
                        { key: '1', label: 'Option A', icon: <Typography.Text>A</Typography.Text> },
                        { key: '2', label: 'Option B', icon: <Typography.Text>B</Typography.Text> },
                    ]}
                />
            </Sider>

            <Layout>
                {/* Header */}
                <Header
                    style={{
                        backgroundColor: '#1c2d50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 16px',
                    }}
                >

                    <Typography.Title level={4} style={{ color: 'white', margin: 0 }}>
                        Dashboard
                    </Typography.Title>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <SearchBar placeholder="Search items in claims only" />
                        <Button
                            type="text"
                            icon={<SearchOutlined />}
                            style={{ color: 'white' }}
                        />
                        <NotificationPopup
                            notifications={notifications}
                            onCloseNotification={handleNotificationClose}
                            open={popupOpen}
                            onClose={() => setPopupOpen(false)}
                        >
                            <Badge count={notifications.length} offset={[10, 0]}>
                                <Button
                                    type="text"
                                    icon={<BellOutlined />}
                                    onClick={handleNotificationClick}
                                    style={{ color: 'white' }}
                                />
                            </Badge>
                        </NotificationPopup>

                    </div>
                </Header>

                {/* Content */}
                <Content style={{ padding: '16px' }}>
                    <ContentHeader
                        startDate=""
                        endDate=""
                        setStartDate={() => { }}
                        setEndDate={() => { }}
                        screenName="Screen A"
                    />
                    <Typography.Title level={3}>Automation System Dashboard</Typography.Title>
                    <Typography.Text>
                        Welcome to the dashboard. Track the status of your automation systems here.
                    </Typography.Text>
                </Content>
            </Layout>

            {/* Notification Popup */}


        </Layout>
    );
}

function generateRandomNotifications() {
    const messages = [
        'System update available.',
        'New user registered.',
        'Server downtime scheduled.',
        'Password reset request.',
        'New comment on your post.',
    ];
    return Array.from({ length: 3 }, () => generateRandomNotification(messages));
}

function generateRandomNotification(messages = [
    'System update available.',
    'New user registered.',
    'Server downtime scheduled.',
    'Password reset request.',
    'New comment on your post.',
]) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomDate = new Date(
        Date.now() - Math.floor(Math.random() * 100000000)
    ).toLocaleString();
    return { message: randomMessage, date: randomDate };
}

export default HomeScreen;