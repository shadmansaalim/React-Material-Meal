import React from 'react';
import logo from '../../logo.svg'
const NotFound = () => {
    return (
        <div style={{ marginTop: '200px', color: 'white' }}>
            <h3>404 Error</h3>
            <h1 style={{ fontSize: '48px' }}>Page Not Found</h1>
            <img className="App-logo" src={logo} alt="" />
        </div>
    );
};

export default NotFound;