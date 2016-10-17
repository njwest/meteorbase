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
import {insertMarker} from '../../api/markers/methods.js';
import { handleMarkers } from '../../modules/marker';
import {getInputValue} from './get-input-value';

export class AddMarkers extends TrackerReact(React.Component) {

    handleInsertMarkers(event){
        handleMarkers({ component: this });
        event.preventDefault();
        // const email = getInputValue(component.refs.emailAddress)
        // const target = event.target;
        // const title = target.value.trim();
        const val =  ReactDOM.findDOMNode(this.ref)
        console.log('is this shit working?');
        console.log(val);
        console.log(this.refs.addMarker)
        console.log(this.refs.lat)
        console.log(this.refs.lng)
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

    log(event){
      console.log(event)
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
        return(
            <form ref="addMarker" className="addMarker" onSubmit={this.handleInsertMarkers.bind(this)}>
                <FormGroup  >
                <ControlLabel>Name of Route</ControlLabel>
                    <FormControl type="text" ref="name" placeholder="Name the route"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>Latitude</ControlLabel>
                    <FormControl type="text" ref="lat" placeholder="Lat"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>longitude</ControlLabel>
                    <FormControl type="text"  ref="lng" placeholder="Lng."/>
                </FormGroup>
                <FormGroup  >
                    <Button type="submit" bsStyle="success">Submit</Button>
                </FormGroup>
            </form>
        )
    }
}
