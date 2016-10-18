import ReactDOM from 'react-dom';

export const getCurrentPosition = () => (
    navigator.geolocation.getCurrentPosition( (position) => {
        let userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
        this.setState({
            userPosition,
        });

    },
    (error) => {
        alert(error.message);
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 10}
    )
)