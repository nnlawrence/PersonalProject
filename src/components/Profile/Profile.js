import React, { Component } from 'react';
import './Profile.css';
import Map from '../Map/Map';
import axios from 'axios';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

//component did mount sending get request to backend to select all where user id is id that is stored in redux or session

class Profile extends Component {
        constructor(){
            super()
            this.state = {
                addedTruck: [],
            }
    }

    componentDidMount = () => {
        this.getAdminTruck(this.props.store.id)
    }

    //Get the New Truck displayed on profile page
    getAdminTruck = (id) => {
        console.log('hit')
        axios.get(`/api/truckmin/${id}`).then(res => {
            console.log(res.data)
            this.setState({
                addedTruck: res.data
            })
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Profile
                Truck Pic
                Truck Info/edit info
                Location Update
                <Map />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        store: reduxState
    }
}

export default connect(mapStateToProps)(Profile);
