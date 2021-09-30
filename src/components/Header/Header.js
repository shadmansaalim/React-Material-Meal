import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="primary">
                <Box sx={{ display: 'flex' }}>
                    <Toolbar>
                        <NavLink
                            to="/home"
                            className="nav-link"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white",
                                backgroundColor: 'black',
                                padding: '8px',
                                borderRadius: '6px'
                            }}
                        >
                            Home
                        </NavLink>
                    </Toolbar>
                    <Toolbar>
                        <NavLink
                            to="/meals"
                            className="nav-link"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white",
                                backgroundColor: 'black',
                                padding: '8px',
                                borderRadius: '6px'
                            }}
                        >
                            Meals
                        </NavLink>
                    </Toolbar>
                    <Toolbar>
                        <NavLink
                            to="/about"
                            className="nav-link"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white",
                                backgroundColor: 'black',
                                padding: '8px',
                                borderRadius: '6px'
                            }}
                        >
                            About
                        </NavLink>
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>

    );
};

export default Header;