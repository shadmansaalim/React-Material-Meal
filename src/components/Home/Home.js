import React from 'react';
import './Home.css'
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Container fixed>
            <div style={{ marginTop: '240px' }}>
                <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: '900' }}><i>Welcome To <span style={{ color: 'steelblue' }}>Developer's</span> Kitchen</i></h1>
                <Link to='/meals' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="success">View Meals</Button>
                </Link>
            </div>
        </Container>
    );
};

export default Home;