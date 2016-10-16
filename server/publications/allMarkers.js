Meteor.publish( 'allMarkers', function(){
  var user = this.userId;

  if ( user ) {
    var data = [
      Marker.find( { $or: [ { "custom": true, "ownerId": user }, { "custom": false } ] } )
    ];
  } else {
    var data = Marker.find( { "custom": false } );
  }

  if ( data ) {
    return data;
  }

  return this.ready();
});
