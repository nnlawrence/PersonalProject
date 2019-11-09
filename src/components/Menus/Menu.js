import React, { Component } from 'react';
import axios from 'axios';
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props)

        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        let id = +this.props.match.params.id
        // .location.pathname[this.props.location.pathname.length - 1]
        console.log(id)
        axios.get(`/api/menu/${id}`)
        .then(res => {
            this.setState({
                menu: res.data
            })
        })
    }

    render() {
        console.log(this.state.menu)
        const mappedMenu = this.state.menu.map((menu, index) => {
            return (<div className='return-content' key={index} menu={menu}>
                         <div><h1>{menu.menu_item}</h1></div>
                         <div><h2>${menu.menu_price}</h2></div>
                    </div>)
        })

        return (
            <div className='menu-comp'>
                <h1>MENU</h1>
                <div className='menu-display'>
                    {mappedMenu}
                </div>
            </div>
        )
    }
}

export default Menu;
