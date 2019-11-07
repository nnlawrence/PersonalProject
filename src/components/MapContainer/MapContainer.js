import React, { Component } from 'react';
import 'reset.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './MapContainer.css';
import axios from 'axios';
// import CurrentLocation from '../Map/Map';



//componentDidMount get request to backend for lat long from trucks table
//update this.state.addresses

//this.state.addresses.map((address) => {
//return <Marker
//position={{lat: address.lat, lng: address.lng}}
//})

const mapStyles = {
  width: '95.5%',
  height: '35%',
  marginLeft: '2%',
  marginRight: '4.2%',
  marginTop: '2%',
  boxShadow: '5px 5px 28px 5px rgba(0,0,0,0.8)',
  borderRadius: '6px'
};

export class MapContainer extends Component {
    state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
     addresses: []          
  }

  //function getting addresses
  componentDidMount() {
      this.getAddresses()
  }

  //get addresses from trucks table in database
  getAddresses = () => {
      axios.get('/api/addresses').then(res => {
          console.log(res)
          this.setState({
              addresses: res.data
          })
      })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const mappedAddresses = this.state.addresses.map((addresses, index) => {
      return <Marker key={index}
                position={{lat: `${addresses.latitude}`, lng: `${addresses.longitude}`}} />
    })
    return (
      <div className='google-map'>
      <Map
        google={this.props.google}
        zoom={7.3}
        style={mapStyles}
        initialCenter={{
         lat: 40.391617,
         lng: -111.850769
        }}
      >
        {/* <CurrentLocation centerAroundCurrentLocation
        google={this.props.google} > */}
        {mappedAddresses}
        {/* </CurrentLocation> */}
        </Map>

        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
        
      
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDW2WZ_tzinl9WJujGmtiDIYwTmPAuHzk0'
})(MapContainer);
