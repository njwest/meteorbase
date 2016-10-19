import React, {PropTypes, Component} from 'react';
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
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_places';
import { createContainer } from 'meteor/react-meteor-data';
import { Markers } from '../../api/markers/markers.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';
import controllable from 'react-controllables';

var divStyle = {
    width: '100%',
    height: 768
};
const K_WIDTH = 40;
const K_HEIGHT = 40;
const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;
const K_HOVER_DISTANCE = 30;

@controllable(['center', 'zoom', 'hoverKey', 'clickKey'])

class SimpleMapPage extends React.Component {
    //shouldComponentUpdate = shouldPureComponentUpdate;
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            zoom: 12,
            showModal: false
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this._onChildClick = this._onChildClick.bind(this);

    }

    close() {
        this.setState({ showModal: false });
      }

    open() {
        this.setState({ showModal: true });
      }


    _onChildClick(key, childProps){
      console.log('ow');
      this.setState({ showModal: true});
      const markerId = childProps.marker.get('id');
      const index = this.props.markers.findIndex(m => m.get('id') === markerId);
      if (this.props.onChildClick) {
        this.props.onChildClick(index);
      }
    }

    _onChildMouseEnter(key, childProps) {
      const markerId = childProps.marker.get('id');
      const index = this.props.markers.findIndex(m => m.get('id') === markerId);
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(index);
      }
    }

    _onChildMouseLeave(/* key, childProps */)  {
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(-1);
      }
    }

	componentDidMount() {
		this.getCurrentPosition();
	}
    getCurrentPosition(){
        navigator.geolocation.watchPosition( (position) => {
            let userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
            this.setState({
                userPosition,
            });
        },
        (error) => {
            alert(error.message);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 10}
        );
    }
    markers(){
        return Markers.find().fetch();
    }
    render() {
        console.log(this.state.userPosition)

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

        return (
            <div style={divStyle}>
                <GoogleMap bootstrapURLKeys={{
                    key: 'AIzaSyDAQIZigb4sd4EIMVeDZ1jxdx8tH9QRyEM',
                    language: 'us'
                }}
                    center={this.state.userPosition}
                    zoom={this.state.zoom}
                    defaultCenter={this.state.defaultCenter}
                    defaultZoom={this.state.zoom}
                    hoverKey= "lol"
                    hoverDistance={40 / 2}
                    visibleRowFirst= "-1"
                    visibleRowLast= "-1"
                    hoveredRowIndex= "-1"
                    onChildClick={this._onChildClick}

                    >

                      {this.markers().map( (marker) => {
                        return <MyGreatPlace key={marker._id} lat={marker.lat} lng={marker.lng} text={marker.name} hover="Some shit" />
                      })}

                      <MyGreatPlace lat={this.state.userPosition.lat} lng={this.state.userPosition.lng} text="I'm here!" />
                </GoogleMap>

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
        );
    }
}

SimpleMapPage.propTypes = {
  center: PropTypes.array, // @controllable
  zoom: PropTypes.number, // @controllable
  hoverKey: PropTypes.string, // @controllable
  clickKey: PropTypes.string, // @controllable
  onCenterChange: PropTypes.func, // @controllable generated fn
  onZoomChange: PropTypes.func, // @controllable generated fn
  onHoverKeyChange: PropTypes.func, // @controllable generated fn

  greatPlaces: PropTypes.array
};


export default createContainer((props) => {

     Meteor.subscribe('markers');
     return {
       poi: Markers.find({}, { sort: { createdAt: -1 } }).fetch()
     }
}, SimpleMapPage) ;
