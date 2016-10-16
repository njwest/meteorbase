Markers = new Meteor.Collection( 'customers' );

Markers.schema = new SimpleSchema({
  title: {
    type: String,
    defaultValue: "",
    label: 'The name of the route',
  },
  lat:{
      type: Number,
      defaultValue: "",
      label: "latitude",
  },
  lng:{
      type: Number,
      defaultValue: "",
      label: "longitude",
  },
  rating:{
      type: Number,
      defaultValue: "",
      label: "User Rating",
  },
  difficulty:{
      type: Number,
      defaultValue: "",
      label: "Route difficulty",
  },
  "userId": {
    type: String,
    label: "User ID"
  },
});

Markers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Markers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});


Markers.attachSchema( Markers );
