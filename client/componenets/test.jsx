 /* This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */


 var MyComponent = ReactMeteor.createClass({

  templateName: "Homebar",
  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
  },
  render: function () {
    return (
      <div className="shit">
       <h1>Short description of Product</h1>
       <p>A few reasons why this product is worth using, who it's for and why they need it.</p>
      </div>
    )
  },
    // Make sure your component implements this method.
  getMeteorState: function() {
    return {
      playerCount: Wines.find().count()
    };
  }
});