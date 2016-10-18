import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {
    FormGroup,
    FormControl,
    Button,
    ControlLabel
} from 'react-bootstrap';
import {Bert} from 'meteor/themeteorchef:bert';
import { insertMarker } from '../../api/markers/methods.js';
import { handleMarkers } from '../../modules/marker';
import {getInputValue} from '../../modules/get-input-value';
// import {getCurrentPosition} from '../../modules/get-current-position';
export class AddMarkers extends React.Component {
    constructor(){
        super();
        console.log(this);
          this.setState = {
            userPosition: {
                lat: 40.7128, lng: -74.0059
            },
            subscription: {
            //resolutions : Meteor.subscribe('allResolutions')
              markers : Meteor.subscribe('allMarkers')
            },
          }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          this.setState = {
            userPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }
        });
        console.log('did this shit mount??', this)
    }
    handleInsertMarkers(event){
        event.preventDefault();
        handleMarkers({ component: this });
        console.log(this.state.userPosition)
        // console.log(this.state.obj)
        // const name = getInputValue(event)
        // handleMarkers({ component: obj });
        // const email = getInputValue(component.refs.emailAddress)
        // const target = event.target;
        // const title = target.value.trim()
        console.log('is this shit working?');
        console.log(getInputValue(this.refs.name))
        console.log(getInputValue(this.refs.lat))
        console.log(getInputValue(this.refs.lng))
        // if (title !== '' && event.keyCode === 13) {
        //   insertMarker.call({
        //     title,
        //   }, (error) => {
        //     if (error) {
        //       Bert.alert(error.reason, 'danger');
        //     } else {
        //       target.value = '';
        //       Bert.alert('Marker added!', 'success');
        //     }
        //   });
        // }
    }

    render(){
      console.log(this)
        return(
            <form ref="addMarker" className="addMarker" onSubmit={ this.handleInsertMarkers.bind(this) }>
                <FormGroup  >
                <ControlLabel>Name of Route</ControlLabel>
                    <FormControl type="text" ref="name" className="required" name="name" placeholder="Name the route"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>Latitude</ControlLabel>
                    <FormControl type="text" ref="lat" v className="required" name="lat" placeholder="Lat"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>longitude</ControlLabel>
                    <FormControl type="text"  ref="lng"  className="required" name="lng"  placeholder="Lng."/>
                </FormGroup>
                <FormGroup  >
                    <Button type="submit" bsStyle="success">Submit</Button>
                </FormGroup>
            </form>
        )
    }
}
