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
import {getInputValue} from './get-input-value';

export class AddMarkers extends React.Component {
    constructor(){
        super();
        this.state = {
          //without TrackerReact, you can't do the following:
          //if we change what gets published in publish.js then what's available in the front end (see with ctrl + m) is limited to just that.
        subscription: {
            //resolutions : Meteor.subscribe('allResolutions')
            markers : Meteor.subscribe('allMarkers')
        },
        }
    }
    componentDidMount() {
      this.setState = {obj: this}
    }
    handleInsertMarkers(event){
        event.preventDefault();
        handleMarkers({ component: this });
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
        return(
            <form ref="addMarker" className="addMarker" onSubmit={ this.handleInsertMarkers.bind(this) }>
                <FormGroup  >
                <ControlLabel>Name of Route</ControlLabel>
                    <FormControl type="text" ref="name" className="required" name="name" placeholder="Name the route"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>Latitude</ControlLabel>
                    <FormControl type="text" ref="lat" className="required" name="lat" placeholder="Lat"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>longitude</ControlLabel>
                    <FormControl type="text"  ref="lng" className="required" name="lng"  placeholder="Lng."/>
                </FormGroup>
                <FormGroup  >
                    <Button type="submit" bsStyle="success">Submit</Button>
                </FormGroup>
            </form>
        )
    }
}
