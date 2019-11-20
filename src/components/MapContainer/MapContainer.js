import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import axios from 'axios';
import './MapContainer.css'

const keys = require('../../config')
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      addresses: []
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

    //function getting addresses
  componentDidMount() {
      this.getAddresses()
  }

  //get addresses from trucks table in database
  getAddresses = () => {
      axios.get('/api/addresses').then(res => {
          this.setState({
              addresses: res.data
          })
      })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {

    const mappedAddresses = this.state.addresses.map((addresses, index) => {
            return <Marker key={index} 
                           position={{lat: `${addresses.latitude}`, lng: `${addresses.longitude}`}}
                          //  onClick={() => this.onMarkerClick(addresses)} label={addresses.truck_name}
                           onClick = { this.onMarkerClick }
                           title = { 'Changing Colors Garage' }
                          //  position = {{ lat: 39.648209, lng: -75.711185 }}
                           name = { addresses.truck_name } 
                           type = {addresses.food_type}
                           contact = {addresses.contact}
                           available = {addresses.available ? 'Open' : 'Closed'}
                          //  label={addresses.truck_name}
                            />
                           
                    })

const style = {
  width: '98%',
  height: '35%',
  marginLeft: '1%',
  marginRight: '1%',
  marginTop: '8px',
  marginBottom: '8px',
  boxShadow: '5px 5px 28px 5px rgba(0,0,0,0.8)',
  borderRadius: '6px',
  // position: 'absolute'
};
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 7.3 }
        initialCenter = {{ lat: 40.391617, lng: -111.850769 }}
      >
        {/* <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        /> */}

        {mappedAddresses}
        
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          {/* <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper> */}
                <div className='infowindow'>
                    <p>Truck: {this.state.selectedPlace.name}</p>
                    <p>Food: {this.state.selectedPlace.type}</p>
                    <p>Contact: {this.state.selectedPlace.contact}</p>
                    <p>Availability: {this.state.selectedPlace.available}</p>
                    <a href="https://thefoodtruckleague.com/">View Events</a>
                </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.googleKey
})(GoogleMapsContainer)