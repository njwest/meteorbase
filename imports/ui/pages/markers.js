// import React from 'react';
// import { Row, Col } from 'react-bootstrap';
// // import DocumentsList from '../containers/documents-list.js';
// import { AddMarkers } from '../components/add-markers.js';
// import { Grid } from 'react-bootstrap';
//
// export const Markers = () => (
// <Grid>
//   <Row>
//     <Col xs={ 12 }>
//       <h4 className="page-header">Markers</h4>
//       <AddMarkers />
//     </Col>
//   </Row>
// </Grid>
// );


import React from 'react';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    Button
 } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddMarkers } from '../components/add-markers.js';
import { Grid } from 'react-bootstrap';

import {Link} from 'react-router';

const Markers = React.createClass({
  handleClick() {
    console.log(this); // React Component instance
  },
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={ 12 }>
                    <h4 className="page-header">Markers</h4>
                    <AddMarkers />
                    {/* <DocumentsList /> */}
                </Col>
            </Row>
        </Grid>
    )
  }
});
Markers.propTypes = {

};
export default Markers;

//
// export class Markers extends React.Component {
//     // handleInsertMarkers(event){
//     //     if(event){
//     //         event.preventDefault();
//     //         console.log('did this shit work?');
//     //     }
//     // }
//     constructor(props) {
//         super(props);
//         this.state = {
//             userPosition: {lat: 40.7128, lng: -74.0059},
//             defaultCenter: {
//                 lat: 40.7128,
//                 lng: -74.0059
//             },
//             // zoom: 12,
//             //
//             // subscription: {
//             //     markers: Meteor.subscribe('allMarkers')
//             // },
//             // markers: Markers.find().fetch(),
//         }
//     }
//     render() {
//         return(
//             <Grid>
//                 <Row>
//                     <Col xs={ 12 }>
//                         <h4 className="page-header">Markers</h4>
//                         <AddMarkers />
//                         {/* <DocumentsList /> */}
//                     </Col>
//                 </Row>
//             </Grid>
//         )
//     }
// }
