import React from 'react';
import './Home.css'
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Container fixed>
            <div style={{ marginTop: '240px' }}>
                <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: '900' }}>Welcome To <span style={{ color: '#c0ded9 ' }}>Developer's</span> Kitchen</h1>
                <Link to='/meals' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="error">View Meals</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Home;