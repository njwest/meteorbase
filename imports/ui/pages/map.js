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

    componentDidMount() {
      // create the map, marker and infoWindow after the component has
      // been rendered because we need to manipulate the DOM for Google =(
      this.map = this.createMap()
      this.marker = this.createMarker()
      this.infoWindow = this.createInfoWindow()

      // have to define google maps event listeners here too
      // because we can't add listeners on the map until its created
      google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

      google.maps.event.addListener(this.marker, 'click', ()=> this.handleMarkerClick())
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

    handleMarkerClick(){
        console.log("ow");
        this.setState({
          showModal: true

        });
        // modal code
        marker.addListener('click', function() {
          infowindow.open(map, marker);
          this.open();

        });
        this.infowindow.open(map, marker);
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

      render() {

        const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );

        return <div>
        <div className="GMap">
          <div className='UpdatedText'>
            <p>Current Zoom: { this.state.zoom }</p>
          </div>
          <div className='GMap-canvas' ref="mapCanvas">
          </div>
        </div>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Sourland Mountain Preserve Climbs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Sourland Mountain Preserve</h4>
              <p>Climbing is allowed in blank, but watch out for blank.</p>

              <h4>This is a Popover</h4>
              <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

              <h4>Tooltips in a modal</h4>
              <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

              <hr />

              <h4>Overflowing text to show scroll behavior</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      }

}
