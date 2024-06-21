import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from '../HomeComponent/HomeComponent';
import DMComponent from '../DMComponent/DMComponent';
import ActivityComponent from '../ActivityComponent/ActivityComponent';


const drawerWidth = 240

export default function PermanentDrawerLeft() {

    const [activeIcon, setActiveIcon] = React.useState('/')

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, height:'' }}
                >
                </AppBar>
            <Drawer
                sx={{
                width: '5%',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '5%',
                    boxSizing: 'border-box',
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
                            to="/"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}
                        >
                            <ListItemIcon 
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '2em', width: '2em', backgroundColor: activeIcon === '/none' ? 'lightblue' : 'transparent', }}
                            >
                                <HomeIcon />
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
                                <ChatIcon />
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
                                <NotificationsIcon/>
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
                                <MoreHorizOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="More" />
                        </ListItemButton>
                    </ListItem>

                </List>
                
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/dm" element={<DMComponent />} />
                    <Route path="/activity" element={<ActivityComponent />} />
                    <Route path="/more" element={<HomeComponent />} />
                </Routes>
                {/* </BrowserRouter> */}
            </Box>
        </Box>
    );
}
