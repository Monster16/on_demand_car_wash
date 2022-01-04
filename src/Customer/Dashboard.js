import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import carwashlogo from '../assets/images/carwashlogo.png';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';


const drawerWidth = 240;

function MiniDrawer() {
    
    const itemList = [
        {
            text: "HOME",
            icon: <HomeIcon />,
            path: '/customer_home'
           
        },
        {
            text: "SERVICES",
             icon: <CleaningServicesIcon />,
            path: '/customer_home/services'
            
        },
         {
            text: "BOOKORDERS",
             icon: <ScreenSearchDesktopIcon />,
            path: '/customer_home/bookorders'
            
        },
        
       
        {
            text: "MYORDERS",
            icon: <BookmarkAddedIcon />,
            path: '/customer_home/myorders'
            
        },
        {
            text: "LOGOUT",
            icon: <LogoutIcon />,
            path: '/'
            
        },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
                        <img src={carwashlogo}  alt="carwash" height={40} style={{ marginRight: '16px' }} />
                        <Typography variant='h5' display={'inline'}>Welcome, CUSTOMER</Typography>
                    </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
                <List>
                    {itemList.map((item, index) => {
                        return (
                            <ListItem button key={item.text} >
                                <Link to={item.path}>
                                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                                </Link>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        );
                    })}

                </List>
                 </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
            </Box>
        </Box>
    );
}

export default MiniDrawer;