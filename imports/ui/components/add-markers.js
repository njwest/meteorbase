import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {
    FormGroup,
    FormControl,
    FieldGroup,
    Checkbox,
    Button,
    ControlLabel
} from 'react-bootstrap';
import {Bert} from 'meteor/themeteorchef:bert';
import { insertMarker } from '../../api/markers/methods.js';
import { handleMarkers } from '../../modules/marker';
import {getInputValue} from '../../modules/get-input-value';
export class AddMarkers extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
          this.setState = {
            subscription: {
            //resolutions : Meteor.subscribe('allResolutions')
              markers : Meteor.subscribe('allMarkers')
            },
          }
    }
    componentDidMount() {
        console.log('did this shit mount??', this)
    }
    handleInsertMarkers(event){
        event.preventDefault();
        // navigator.geolocation.getCurrentPosition(function(position) {
        //   console.log(position.coords.latitude);
        //   console.log(position.coords.longitude);
        // });
        handleMarkers({ component: this, lat: this.props.userPosition.lat , lng: this.props.userPosition.lng });
        console.log(this.props.userPosition.lat);
        console.log(this.props.userPosition.lng);
        // // console.log(this.state.obj)
        // const name = getInputValue(this.refs.name)
        // const lat = getInputValue(Number(this.refs.lat))
        // const lng = getInputValue(Number(this.refs.lng))

        // console.log('is this shit working?');
        // console.log(getInputValue(this.refs.name))
        // console.log(getInputValue(this.refs.lat))
        // console.log(getInputValue(this.refs.lng))
        // // if (title !== '' && event.keyCode === 13) {
        //   insertMarker.call({
        //     name,
        //     lat,
        //     lng
        //   }, (error) => {
        //     if (error) {
        //       Bert.alert(error.reason, 'danger');
        //     } else {
        //       target.value = '';
        //       Bert.alert('Marker added!', 'success');
        //     }
        //   });
        // // }
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

                    <FormControl type="text" ref="lat" value={this.props.userPosition.lat} className="required" name="lat"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>Longitude</ControlLabel>
                    <FormControl type="text"  ref="lng"  value={this.props.userPosition.lng} className="required" name="lng"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>Rating</ControlLabel>
                    <FormControl type="text"  ref="rating" className="required" name="rating" placeholder="what's your rating out of 5?"/>
                </FormGroup>
                <FormGroup  >
                    <ControlLabel>Difficulty</ControlLabel>
                    <FormControl type="text"  ref="difficulty"  placeholder="V0-12" className="required" name="lng"/>
                </FormGroup>
                <FormGroup controlId="comments">
                  <ControlLabel>Comments</ControlLabel>
                  <FormControl componentClass="textarea" ref="comments" placeholder="Tell us what you think about this climb" />
                </FormGroup>
                {/* <FieldGroup
                  id="formControlsFile"
                  type="file"
                  label="File"
                  help="Example block-level help text here."
                /> */}
                <FormGroup  >
                    <Button type="submit" bsStyle="success">Submit</Button>
                </FormGroup>
            </form>
        )
    }
}
