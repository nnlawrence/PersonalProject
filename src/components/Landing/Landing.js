import React, { Component } from 'react';
import axios from 'axios';
import TruckList from '../TruckList/TruckList';
import './Landing.css'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            trucks: []
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

    render() { 
        console.log(this.state)
        const mappedTrucks = this.state.trucks.map((list, index) => {
            return <TruckList key={ index } trucks={ list } />
        })

        return ( 
            <div className='truck-list-holder'>
                <h1>Food Trucks</h1>
                <div className='mapped'>{ mappedTrucks }</div>
            </div>
         );
    }
}
 
export default Landing;
