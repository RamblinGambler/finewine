Meteor.publish('lots', function() {
  return Lots.find();
});