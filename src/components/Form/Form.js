import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            truck_name: '',
            food_type: '',
            image: '',
            contact: '',
            latitude: '',
            longitude: ''

         }
    }

    componentDidMount() {
        console.log(this.state)
        this.getTrucks()
    }

    getTrucks = () => {
        axios.get('/api/trucks').then(res => {
            console.log(res)
            this.setState({
                trucks: res.data
            })
        })
    }

    addTruck = () => {
        const newTruck = { 
            truck_name: this.state.truck_name, food_type: this.state.food_type, image: this.state.image, 
            contact: this.state.contact,
            latitude: this.state.latitude, longitude: this.state.longitude 
        }
        axios.post('/api/trucks', newTruck)
        .then(res => {
            this.getTrucks(res.data)
            this.props.history.push('/')
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <div className='new-truck-info'>
                <h1 className='new-form-title'>New Food Truck!</h1>
                <label>Truck Name: </label>
                <input 
                    className='new-truck-input'
                    // placeholder='Food Truck Name' 
                    name='truck_name' 
                    onChange={(e) => this.handleInput(e)}  />  
                <label>Food Type: </label>    
                <input
                    className='new-truck-input'
                    // placeholder='Food Type'
                    name='food_type'
                    onChange={(e) => this.handleInput(e)} />
                <label>Truck Photo: </label>
                <input
                    className='new-truck-input'
                    // placeholder='Truck Image'
                    name='image'
                    onChange={(e) => this.handleInput(e)} />
                <label>Contact: </label>
                <input 
                    className='new-truck-input'
                    // placeholder='Contact'
                    name='contact'
                    onChange={(e) => this.handleInput(e)} />
                <label>Latitude: </label>
                <input 
                    className='new-truck-input'
                    // placeholder='Latitude'
                    name='latitude'
                    onChange={(e) => this.handleInput(e)} />
                <label>Longitude: </label>
                <input 
                    className='new-truck-input'
                    // placeholder='Longitude'
                    name='longitude'
                    onChange={(e) => this.handleInput(e)} />
                <span 
                    className='complete-btn' 
                    onClick={ this.addTruck }>Complete
                </span>
            </div>
         );
    }
}
 
export default Form;