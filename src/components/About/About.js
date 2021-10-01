import React from 'react';
import logo from '../../logo.svg'

const About = () => {
    return (
        <div style={{ marginTop: '120px', color: 'white', width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
            <p style={{ fontSize: '24px' }}><i>React Application Developed By <strong style={{ color: '#c0ded9 ' }}>Saalim Shadman</strong>, A Computer Science Student at RMIT Australia. I used React Js and Material-UI to build this Application.This is my first project using Material-UI. I am trying to explore and learn new things.</i></p>
            <img className="App-logo" src={logo} alt="" />
        </div>
    );
};

export default About;