import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';
import swal from 'sweetalert';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            truck_name: '',
            food_type: '',
            image: '',
            contact: '',
            latitude: '',
            longitude: '',
            // user_id: ''

         }
    }
    //function getting trucks invoked
    componentDidMount() {
        console.log(this.state)
        this.getTrucks()
    }
    //get trucks from db
    getTrucks = () => {
        axios.get('/api/trucks').then(res => {
            console.log(res)
            this.setState({
                trucks: res.data
            })
        })
    }
    //Add a new food truck for admin
    addTruck = () => {
        const newTruck = { 
            truck_name: this.state.truck_name, food_type: this.state.food_type, image: this.state.image, 
            contact: this.state.contact,
            latitude: this.state.latitude, longitude: this.state.longitude,
            user_id: this.props.reduxState.id

        }
        axios.post('/api/trucks', newTruck)
        .then(res => {
            this.getTrucks(res.data)
            this.props.history.push('/profile')
        })
        swal({
            title: "Excellent! 👍",
            text: "Your Food Truck Was Added",
            icon: "success",
          });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        console.log(this.props)
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

const mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}
 
export default connect(mapStateToProps, {updateUser})(Form);