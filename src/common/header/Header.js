import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header">
                <a className="logo" href="/home">Image Viewer</a>
                </header>
            </div>
        )
           
    }
}

export default Header;