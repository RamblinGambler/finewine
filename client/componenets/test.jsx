 /* This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */


 var MyComponent = ReactMeteor.createClass({

  templateName: "React",
  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
  },
  render: function () {
    return (
      <div className="shit"> wines </div>
    )
  },
    // Make sure your component implements this method.
  getMeteorState: function() {
    return {
      playerCount: Wines.find().count()
    };
  }
});

// React.renderComponent( MyComponent, document.body);
