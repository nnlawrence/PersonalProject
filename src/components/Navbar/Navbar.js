import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    handleLogout = () => {
        axios.post('/auth/logout').then(res => {
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
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
                    <li>Login/Register</li>
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
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/auth/login'>Login/Register</Link></li>
                    <li>Admin Registration</li>
                    <Link to='/'><li onClick={ this.handleLogout }>Logout</li></Link>
               </ul>
        </div>
      )
    }
}

export default Navbar;
