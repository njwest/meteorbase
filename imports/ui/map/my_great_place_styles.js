const K_SIZE = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: 250,
  height: 40,
  // left: -K_SIZE / 2,
  // top: -K_SIZE / 2,

  border: '5px solid #a5a745',
  borderRadius: '4px',
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#a5a745',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #a5a745',
  color: '#a5a745'
};

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};
