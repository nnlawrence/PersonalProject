import React, { Component } from 'react';
import axios from 'axios';
import TruckList from '../TruckList/TruckList';
import './Landing.css'
// import { Link } from 'react-router-dom';
import MapContainer from '../MapContainer/MapContainer';
// import Map from '../Map/Map';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            trucks: []
         }
    }
    //function running get trucks
    componentDidMount() {
        this.getTrucks()
    }
    //get trucks from db
    getTrucks = () => {
        axios.get('/api/trucks').then(res => {
            this.setState({
                trucks: res.data
            })
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //Delete a food truck
    deleteTruck = (id) => {
        axios.delete(`/api/truck/${id}`).then(res => {
            this.setState({
                trucks: res.data
            })
            this.getTrucks()
        })
        .catch(err => console.log(err))
    }

    render() { 
        const mappedTrucks = this.state.trucks.map((list, index) => {
            return <TruckList key={ index } trucks={ list } deleteTruck={ this.deleteTruck } />
        })

        return ( 
           <div className='home'>
            <div className='map-container'><MapContainer /></div>
              <div className='landing-container'>
                <div className='mapped-head'>
                    <h1>Food Trucks</h1>
                    {/* <input 
                        className='food-search' 
                        onChange={(e) => this.handleInput(e)} 
                        placeholder='Food Type, Name' 
                        name='trucks' /> */}
                </div>
                <div className='truck-list-holder'>
                <div className='mapped'>
                    { mappedTrucks }
                </div>
              </div>
            </div>
           </div> 
         );
    }
}
 
export default Landing;
