import React from 'react';
import {
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import {Bert} from 'meteor/themeteorchef:bert';
import {insertMarker} from '../../api/markers/methods.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// const handleInsertMarkers = (event) => {
    // const target = event.target;
    // const title = target.value.trim();
    //
    // console.log('is this shit working?');
    // console.log(event);
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
//     preventDefault()
// };

// const log = (event) => {
//   console.log(event)
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
// };


const AddMarkers = React.createClass({
  handleClick() {
    console.log(this); // React Component instance
  },
  render() {
    return (
        <form >
            <FormGroup >
                <FormControl type="text" name="name" placeholder="Name the route"/>
            </FormGroup>
            <FormGroup >
                <FormControl type="text" name="lat" placeholder="Lat"/>
            </FormGroup>
            <FormGroup >
                <FormControl type="text"  name="lng" placeholder="Lng"/>
            </FormGroup>
            <Button type="submit" bsStyle="success">Submit</Button>
        </form>
    );
  }
});

export default AddMarkers;
// class AddMarkers extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     // handleInsertMarkers(event){
//     //     console.log('something');
//     // }
//     render() {
//         return(
//             <form >
//                 <FormGroup >
//                     <FormControl type="text" name="name" placeholder="Name the route"/>
//                 </FormGroup>
//                 <FormGroup >
//                     <FormControl type="text" name="lat" placeholder="Lat"/>
//                 </FormGroup>
//                 <FormGroup >
//                     <FormControl type="text"  name="lng" placeholder="Lng"/>
//                 </FormGroup>
//                 <Button type="submit" bsStyle="success">Submit</Button>
//             </form>
//         )
//     }
// }
// export default AddMarkers;
