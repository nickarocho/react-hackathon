import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize'
import './App.css';

const Welcome = () => (
    <div className="Welcome">
        <Link to='/catalogue'><Button waves='light' className='#212121 grey darken-4'> View Catalogue <Icon right>arrow_forward</Icon></Button></Link>
    </div>
)

export default Welcome;