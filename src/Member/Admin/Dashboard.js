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
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import carwashlogo from '../../assets/images/carwashlogo.png';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LogoutIcon from '@mui/icons-material/Logout';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Link } from "react-router-dom";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


const drawerWidth = 240;

function MiniDrawer(props) {
    
    const itemList = [
        {
            text: "HOME",
            icon: <HomeIcon />,
            path: '/admin_home'
           
        },
        // {
        //     text: "CARS",
        //     icon: <TimeToLeaveIcon />,
        //     path: '/admin_home/cars'
            
        // },
        // {
        //     text: "SERVICES",
        //     icon: <LocalCarWashIcon />,
        //      path: '/admin_home/services'
           
        // },
        {
            text: "WASHERS",
            icon: <EngineeringIcon />,
             path: '/admin_home/washers'
            
        },
        {
            text: "ORDERS",
            icon: <BookmarkAddIcon />,
             path: '/admin_home/orders'
            
        },
         {
            text: "COMPLETEDORDERS",
            icon: <BookmarkAddedIcon />,
             path: '/admin_home/completedorders'
            
        },
        {
            text: "LOGOUT",
            icon: <LogoutIcon />,
             path: '/'
        }
            
    ];

    return (
          <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
                        <img src={carwashlogo} alt="carwash" height={40} style={{ marginRight: '16px' }} />
                        <Typography variant='h5' display={'inline'}>Welcome, Admin</Typography>
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
                                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}</Link>
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