import React from 'react';
import './TruckList.css';

//display of food truck info

    const TruckList = (props) => {
        console.log(props, 'jest')
        const { truck_id, truck_name, food_type, image, contact, latitude, longitude } = props.trucks
        console.log(props.deleteTruck)
        //if(isAdmin)
        return ( 
            <div className='truck-details'>
                <span className='x-delete' onClick={ () => props.deleteTruck(truck_id) }>x</span>
                <h1>{ truck_name }</h1>
                <img src={image} alt='pic' />
                <p>{ food_type}</p>
                <p>{ contact }</p>
                <p>{ latitude }</p>
                <p>{ longitude }</p>
                <button onClick={() => props.selectTruck(truck_id)}>Select For Edit</button>
            </div>
         );
    }

 
export default TruckList;