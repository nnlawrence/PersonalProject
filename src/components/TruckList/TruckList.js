import React, { Component } from 'react';
import './TruckList.css';
import { withRouter } from 'react-router-dom';

//display of food truck info

    class TruckList extends Component {

        menuRoute = () => {
            this.props.history.push(`/menu/${this.props.trucks.truck_id}`)
        }

        render() {
        const { truck_id, truck_name, food_type, image, contact } = this.props.trucks
        console.log(this.props)
        //if(isAdmin)
        
        return ( 
            <div className='truck-details'>
                <span className='x-delete' onClick={ () => this.props.deleteTruck(truck_id) }>x</span>
                <div className='route-to-menu' onClick={ this.menuRoute }>
                <h1>{ truck_name }</h1>
                <img src={image} alt='pic' />
                <p>{ food_type}</p>
                <p>{ contact }</p>
                </div>
                {/* <p>{ latitude }</p>
                <p>{ longitude }</p> */}
                <button onClick={() => this.props.selectTruck(truck_id)}>Select For Edit</button>
            </div>
         );
    }
}

 //<a href='https://thefoodtruckleague.com/'>
export default withRouter(TruckList);