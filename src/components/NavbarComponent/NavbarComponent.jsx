import * as React from 'react';
import { Box, Drawer, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home as HomeIcon, Chat as ChatIcon, Notifications as NotificationsIcon, MoreHorizOutlined as MoreHorizOutlinedIcon } from '@mui/icons-material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const drawerWidth = 70

const NavbarComponent = () => {

    const [activeIcon, setActiveIcon] = React.useState('/')

    return (
        <Box sx={{ display: 'flex', backgroundColor:'purple' }}>

            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: 'purple',
                    color: 'white'
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                {/* <Divider /> */}
                <List>
                    <ListItem disablePadding >
                        <ListItemButton 
                            component={Link}
                            to="/dashboard"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}
                        >
                            <ListItemIcon 
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '2em', width: '2em', backgroundColor: activeIcon === '/none' ? 'lightblue' : 'transparent', }}
                            >
                                <HomeIcon 
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ fontSize:'5px'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton 
                            component={Link}
                            to="/dm"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <ListItemIcon 
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '2em', backgroundColor: activeIcon === '/none' ? 'lightblue' : 'transparent', }}
                            >
                                <ChatIcon 
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Chat" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton 
                            component={Link}
                            to="/activity"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <ListItemIcon 
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '2em', width: '1em', backgroundColor: activeIcon === '/none' ? 'lightblue' : 'transparent', }}
                            >
                                <NotificationsIcon 
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Activity" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton 
                            component={Link}
                            to="/"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <ListItemIcon 
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '2em', backgroundColor: activeIcon === '/none' ? 'lightblue' : 'transparent', }}
                            >
                                <MoreHorizOutlinedIcon 
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="More" />
                        </ListItemButton>
                    </ListItem>

                </List>
                
            </Drawer>
        </Box>
    );
}

export default NavbarComponent
