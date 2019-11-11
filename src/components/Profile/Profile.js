import React, { Component } from 'react';
import './Profile.css';
// import MapComp from '../MapComp/MapComp';
import axios from 'axios';
import { connect } from 'react-redux';
import TruckList from '../TruckList/TruckList';
import { Link } from 'react-router-dom';
import Switch from '../Switch';
import swal from 'sweetalert';

//component did mount sending get request to backend to select all where user id is id that is stored in redux or session

class Profile extends Component {
        constructor(){
            super()
            this.state = {
                addedTruck: [],
                truck_name: '',
                food_type: '',
                image: '',
                contact: '',
                latitude: '',
                longitude: '',
                edit: false,
                selectedTruck: '',
                selectedTruckObj: {}
            }
            //{truck_id: 0} inside addedTruck[]
    }

    componentDidMount = () => {
        console.log(this.props.store.id)
        this.getAdminTruck(this.props.store.id)
    }

    //Get the New Truck displayed on profile page
    getAdminTruck = (user_id) => {
        console.log(user_id)
        axios.get(`/api/truckmin/${user_id}`).then(res => {
            console.log(res.data)
            this.setState({
                addedTruck: res.data
            })
        })
    }

        //Delete a food truck
    deleteTruck = (truck_id, user_id) => {
        axios.delete(`/api/truck/${truck_id}/${this.props.store.id}`).then(res => {
            console.log(res.data)

                this.setState({
                    addedTruck: res.data
                })
            })
            .catch(err => console.log(err))
            swal({
                title: "Deleted!😮",
                text: "Your Truck Has Been Deleted",
                icon: "success",
              });

    }

    // edit your truck information
    editTruck = (truck_id, user_id) => {
            let truckEdit = {
                truck_name: this.state.truck_name,
                food_type: this.state.food_type,
                image: this.state.image,
                contact: this.state.contact,
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
            console.log(truckEdit)
            console.log(truck_id)
        
            axios.put(`/api/truck/${truck_id}/${this.props.store.id}`, truckEdit).then(res => {
                this.updateTruck(res.data)
                // this.handleToggle()
        })
        swal({
            title: "Updated!💨",
            text: "Movin' On Up!",
            icon: "success",
          });
    }

    // submit the edited information

    updateTruck = (data) => {
        console.log(data)
        this.setState({
            addedTruck: data
        })
    }

    selectTruck = (id) => {
        console.log(id)

        //write a filter or map that 
        //finds the correct truck 
        //and returns it in an object
        let truckFilter = this.state.addedTruck.filter((element, index) => {
           if (element.truck_id === id) return element
        })
        truckFilter = truckFilter[0]

        console.log(truckFilter)
        this.setState({
            selectedTruck: id,
            truck_name: truckFilter.truck_name,
            food_type: truckFilter.food_type,
            image: truckFilter.image,
            contact: truckFilter.contact,
            latitude: truckFilter.latitude,
            longitude: truckFilter.longitude
        //use the found truck to set state on inputs
        })
    }

    // edit input field
    editTruckName = (val) => {
        this.setState({
            truck_name: val,
        })
    }
    
    // edit input field
    editFoodType = (val) => {
          this.setState({
              food_type: val
          })
    }
    
    // edit input field
    editImage = (val) => {
          this.setState({
              image: val
          })
    }

    // edit input field
    editContact = (val) => {
        this.setState({
            contact: val
        })
    }
    
    // edit input field
    editLatitude = (val) => {
          this.setState({
              latitude: val
          })
    }
    
    // edit input field
    editLongitude = (val) => {
          this.setState({
              longitude: val
          })
    }

    // // Toggle state true or false
    // handleToggle = () => {
    //     this.setState({
    //         edit: !this.state.edit
    //     })
    // }

    render() {
        console.log(this.state, 'works?')
        return (
            <div className='profile-container'>
              <div className='profile-title'>Profile</div>
              <div className='switch-text'>
                  <p>Mark Available To Open</p>
                  <Switch /></div>
              <div className='profile-truck'>
                    {this.state.addedTruck.map((addedList, index) => {
                        return <TruckList key={`profileTruck: ${index}`}trucks={addedList} deleteTruck={ this.deleteTruck } selectTruck={this.selectTruck} />
                    })}
                    {/* <MapContainer /> */}
              </div> 
              <div className='profile-content'> 
                    <div className='profile-inputs'>
                    <input 
                        className='input-edit'
                        placeholder="Edit Truck Name" name="truck_name" onChange={ (e)=> this.editTruckName(e.target.value) } value={this.state.truck_name} />
                    <input 
                        className='input-edit'
                        placeholder="Edit Food Type" name="food_type" onChange={ (e) => this.editFoodType(e.target.value) } value={this.state.food_type} />
                    <input 
                        className='input-edit'
                        placeholder="Edit Image" name="image" onChange={ (e) => this.editImage(e.target.value) } value={this.state.image} />
                    <input 
                        className='input-edit'
                        placeholder="Edit Contact" name="contact" onChange={ (e) => this.editContact(e.target.value) } value={this.state.contact} />
                    <input 
                        className='input-edit'
                        placeholder="Edit Latitude" name="latitude" onChange={ (e) => this.editLatitude(e.target.value) } value={this.state.latitude} />
                    <input 
                        className='input-edit'
                        placeholder="Edit Longitude" name="longitude" onChange={ (e) => this.editLongitude(e.target.value) } value={this.state.longitude} />
                    </div> 
                    <div className='profile-btn' >
                    <Link to='/form'><button className='add-new-truck'>Add New Truck</button></Link>  
                    <button className='submit-edit' onClick={() => {this.editTruck(this.state.selectedTruck)}}>Submit</button>
                    </div>
              </div> 
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