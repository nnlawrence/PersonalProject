import React from 'react';
import './TruckList.css'

const TruckList = (props) => {
        console.log(props)
        const { truck_id, truck_name, food_type, image, contact, latitude, longitude } = props.trucks
        console.log(props)
        return ( 
            <div className='truck-details'>
                <span className='x-delete' onClick={ () => props.deleteTruck(truck_id) }>x</span>
                <h1>{ truck_name }</h1>
                <img src={image} alt='pic' />
                <p>{ food_type}</p>
                <p>{ contact }</p>
                <p>{ latitude }</p>
                <p>{ longitude }</p>
            </div>
         );
    }

 
export default TruckList;