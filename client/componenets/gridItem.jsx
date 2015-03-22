var gridItemThing = ReactMeteor.createClass({

  templateName: "ReactGridItem",

  render: function () {
    return (
      <a className="grid-item">
        <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3.png" alt=""/>
        <h1>Grid Item in React </h1>
        <p>React Grid Item</p>
        <p>{this.state.info}</p>

      </a>
    )
  },

  getMeteorState: function() {
    return {
      playerCount: Wines.find().count()
    };
  }

});