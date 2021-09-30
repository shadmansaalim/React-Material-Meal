import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
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


        // <div>
        //     <NavLink className="nav-links"
        //         to="/home"
        //         activeStyle={{
        //             fontWeight: "bold",
        //             color: "red",
        //             textDecoration: 'underline'
        //         }}
        //     >
        //         Home
        //     </NavLink>
        //     <NavLink className="nav-links"
        //         to="/meals"
        //         activeStyle={{
        //             fontWeight: "bold",
        //             color: "red",
        //             textDecoration: 'underline'
        //         }}
        //     >
        //         Meals
        //     </NavLink>
        //     <NavLink className="nav-links"
        //         to="/about"
        //         activeStyle={{
        //             fontWeight: "bold",
        //             color: "red",
        //             textDecoration: 'underline'
        //         }}
        //     >
        //         About
        //     </NavLink>
        // </div>
    );
};

export default Header;