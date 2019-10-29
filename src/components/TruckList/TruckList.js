import React, { Component } from 'react';
import './TruckList.css'

class TruckList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props)
        const { truck_name, food_type, image, contact, latitude, longitude } = this.props.trucks
        console.log(this.props)
        return ( 
            <div className='truck-details'>
                <h1>{ truck_name }</h1>
                <img src={image} alt='pic' />
                <p>{ food_type}</p>
                <p>{ contact }</p>
                <p>{ latitude }</p>
                <p>{ longitude }</p>
            </div>
         );
    }
}
 
export default TruckList;