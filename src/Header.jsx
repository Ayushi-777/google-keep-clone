import React from 'react'
import logo from './images/logo.png';
export const Header = () => {
    return (
        <div className="header">
            <img src={logo}alt="logo" wight="70" height="70"/>
            <h1>Google Keep</h1>
        </div>
    )
}
export default Header