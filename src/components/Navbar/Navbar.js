import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

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
        swal({
            title: "👋",
            text: "Logged Out",
            icon: "success",
          });
    }

    render() {
    return (
        <div className='navbar-container'>
            <nav className="navbar">
                <ul>
                    <h1 className='title'>Voilà</h1>
                </ul>
                <ul className='navbar-menu'>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Login/Register</li>
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
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/profile'>Profile</Link></li>
                    <li><Link className='link' to='/auth/login'>Login/Register</Link></li>
                    <li onClick={ this.handleLogout }><Link className='link' to='/'>Logout</Link></li>
               </ul>
        </div>
      )
    }
}

export default Navbar;
