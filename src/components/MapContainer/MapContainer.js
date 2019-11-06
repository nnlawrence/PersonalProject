import React, { Component } from 'react';
import 'reset.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import './MapContainer.css';
import CurrentLocation from '../Map/Map';

const mapStyles = {
  width: '98.5%',
  height: '35%',
  marginLeft: '.5%',
  marginRight: '2.2%',
  marginTop: '1.6%',
  border: '1px solid black',
  boxShadow: '0 0 14px rgba(0,0,0,0.6)',
  borderRadius: '4px'
};

export class MapContainer extends Component {
    state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
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
    return (
      <div className='google-map'>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 40.235119,
         lng: -111.662193
        }}
      >
        <CurrentLocation centerAroundCurrentLocation
        google={this.props.google} >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDW2WZ_tzinl9WJujGmtiDIYwTmPAuHzk0'
})(MapContainer);
