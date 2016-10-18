import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import {
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    Grid,
    Modal,
    Popover,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap';
import MyModal from '../components/modal';

export class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            zoom: 10,
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    render() {
      return <div className="GMap">
        <div className='UpdatedText'>
          <p>Current Zoom: { this.state.zoom }</p>
        </div>
        <div className='GMap-canvas' ref="mapCanvas">
        </div>
      </div>
    }

    componentDidMount() {
      // create the map, marker and infoWindow after the component has
      // been rendered because we need to manipulate the DOM for Google =(
      this.map = this.createMap()
      this.marker = this.createMarker()
      this.infoWindow = this.createInfoWindow()

      // have to define google maps event listeners here too
      // because we can't add listeners on the map until its created
      google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
    }

    componentDidUnMount() {
      google.maps.event.clearListeners(map, 'zoom_changed')
    }

    createMap() {
      let mapOptions = {
        zoom: this.state.zoom,
        center: this.mapCenter()
      }
      return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
      return new google.maps.LatLng(
        this.state.defaultCenter.lat,
        this.state.defaultCenter.lng
      )
    }

    createMarker() {
      return new google.maps.Marker({
        position: this.mapCenter(),
        map: this.map
      })
    }

    createInfoWindow() {
      let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
      return new google.maps.InfoWindow({
        map: this.map,
        anchor: this.marker,
        content: contentString
      })
    }

    handleZoomChange() {
      this.setState({
        zoom: this.map.getZoom()
      })
    }


    close() {
        this.setState({ showModal: false });
      }

    open() {
        this.setState({ showModal: true });
      }

}
