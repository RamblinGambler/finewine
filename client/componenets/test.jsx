 /* This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */


 var MyComponent = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
  },
  render: function () {
    return (
      <div> wines </div>
    )
  },
    // Make sure your component implements this method.
  getMeteorState: function() {
    return {
      playerCount: Wines.find().count()
    };
  }
});

React.renderComponent( MyComponent, document.body);
