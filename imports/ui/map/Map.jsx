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
import { getCurrentPosition } from '../../modules/get-current-position';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_places';
import { createContainer } from 'meteor/react-meteor-data';
import { Markers } from '../../api/markers/markers.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';
import controllable from 'react-controllables';
import {getHintBaloonHorizontalPosStyle} from './helper/ballon'
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
      const markerId = childProps.marker.get("_id");
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
		getCurrentPosition(this);
	}
    // getCurrentPosition(){
    //     navigator.geolocation.watchPosition( (position) => {
    //         let userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
    //         this.setState({
    //             userPosition,
    //         });
    //     },
    //     (error) => {
    //         alert(error.message);
    //     },
    //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 10}
    //     );
    // }
    markers(){
        return Markers.find().fetch();
    }
    render() {
        console.log(this.state.userPosition)
        // const hintBaloonHorizontalPosStyle = getHintBaloonHorizontalPosStyle(markerDim.x, this.props.size.width, this.props.origin.x, mapWidth);
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
            <div style={divStyle} id="googleMap">
                <GoogleMap bootstrapURLKeys={{
                    key: 'AIzaSyDAQIZigb4sd4EIMVeDZ1jxdx8tH9QRyEM',
                    language: 'us',
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
                        return <MyGreatPlace key={marker._id} lat={marker.lat} lng={marker.lng} text={marker.name} hover="lol" />
                      })}

                      {this.markers().map( (marker) => {
                      return <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                          <Modal.Title>{marker.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <img src="/rock.png"/>
                        <h4>Difficulty: v{marker.difficulty}</h4>
                        <h4>User Rating: {marker.rating}</h4>
                          <h4>Comments: {marker.comments}</h4>
                          <h4><a href={"https://www.google.com/maps/dir/Current+Location/"+marker.lat+'+'+marker.lng} target="_blank" id="links">Click Here for Directions</a></h4>
                        </Modal.Body>
                      </Modal>
                        })}

                      <MyGreatPlace lat={this.state.userPosition.lat} lng={this.state.userPosition.lng} text="You" />
                </GoogleMap>
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
