import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';
import './Auth.css'
import swal from 'sweetalert';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            isAdmin: false
         }
    }

    //Login User
    handleLogin = () => {
        axios.post('/auth/login', { email: this.state.email, password: this.state.password }).then(res => {
            this.setState({
                email: '',
                password: '',
                isAdmin: ''
            })
            console.log(res.data)
            this.props.updateUser(res.data)
            if(this.state.isAdmin !== false){this.props.history.push('/profile')}else{
                this.props.history.push('/')
            }
        })
        .catch(err =>             
            swal({
            title: "Invalid Credentials",
            text: "🤬",
            icon: "warning",
          }))
    }

    //Register User
    handleRegister = () => {
        axios.post('/auth/register', {email: this.state.email, password: this.state.password, isAdmin: this.state.isAdmin})
        .then(res => {
            this.setState({
                email: '',
                password: '',
                isAdmin: ''
            })
            this.props.updateUser(res.data)

            if(this.state.isAdmin !== false){this.props.history.push('/profile')}else{
                this.props.history.push('/')
            }
        })
        .catch(err => console.log(err))
        swal({
            title: "You're Registered!",
            text: "Let's Keep it Moving!",
            icon: "success",
          });
    }

    //Check if User is an Admin or not
    clickAdmin = () => {
        this.setState({
            isAdmin: true
        })
    }

    //Check is User is not an Admin
    clickUser = () => {
        this.setState({
            isAdmin: false
        })
    }

    //handle what is going in input fields
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <div className='Auth'>
              <div className='auth-container'> 
                <img className='login-pic' src="https://images.unsplash.com/photo-1563861019306-9cccb83bdf0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="logo" />
                {/* <h1>Voilà</h1> */}
                <div className='auth-input-box'>
                <p>Email: </p>
                <input
                    value={this.state.email} 
                    name='email' 
                    onChange={(e) => this.handleInput(e)} />
                </div>
                <div className='auth-input-box'>
                <p>Password: </p>
                <input 
                    value={this.state.password} 
                    name='password'
                    type='password' 
                    onChange={(e) => this.handleInput(e)} />
                </div>

                <form className='option-container'>
                    <p>For Registration Please Select:</p>
                    <div className='admin-option'>
                        <input type="radio" id="option1"
                        name="option" value="User" 
                        onChange={ this.clickUser }/>
                        <label htmlFor="option1">User</label>

                        <input type="radio" id="option2"
                        name="option" value="Owner" 
                        onChange={ this.clickAdmin }/>
                        <label htmlFor="option2">Owner</label>

                    </div>
                </form>

                <div className='auth-button-container'>
                <button className='dark-button' onClick={ this.handleLogin }>Login</button>
                <button className='dark-button' onClick={ this.handleRegister }>Register</button>
                </div>
              </div>   
            </div>
         );
    }
}
 
export default connect(null, { updateUser })(Auth);