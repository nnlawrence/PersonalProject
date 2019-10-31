import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor (){
        super()
        this.state = {
            menu: false
        }
    }

    openMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <h1 className='title'>Voilà</h1>
                </ul>
                <ul className='navbar-menu'>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Login</li>
                    <li>Admin Registration</li>
                    <li>Logout</li>
                </ul>
                <div className='hamburger' onClick={ this.openMenu }>
                    &#9776;
                </div>
            </nav>
            <ul className={
                   this.state.menu ?
                   'menu slide'
                   :
                   'no-menu'
               }>
                    <li><Link to='/'>Home</Link></li>
                    <li>Profile</li>
                    <li>Login</li>
                    <li>Admin Registration</li>
                    <li>Logout</li>
               </ul>
        </div>
      )
    }
}

export default Navbar;
