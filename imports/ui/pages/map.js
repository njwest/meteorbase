import React from 'react';
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
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
      }

    open() {
        this.setState({ showModal: true });
      }

    componentDidMount() {
        // this.getCurrentPosition();
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">New York</h1>'+
            '<div id="bodyContent">'+
            '<p>content string</p>'+
            '</div>'+
            '</div>';

        let sourland = {lat: 40.473927, lng: -74.694482};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: 40.7128,
                lng: -74.0059
            }
        });

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        var marker = new google.maps.Marker({
          position: sourland,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        // modal code
        marker.addListener('click', function() {
          infowindow.open(map, marker);
          this.open;
        });
    }


    render(){
        console.log(this.state);

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
            <div>
                <div id="map" className="map-container"></div>

                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.open}
                >
                  Launch demo modal
                </Button>

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
                  </Modal.Body>

                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
