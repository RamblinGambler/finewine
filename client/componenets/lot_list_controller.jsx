
var Table = Reactable.Table;

window.LotListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    // Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      console.log(Lots.find().fetch()[1]);
      return {
        wines: Lots.find().fetch(),
      }
    } else {
      return {
        wineName: 'nope'
      }
    }
  },

  componentWillMount: function() {

  },

  render: function () {
    return (
      <Table className="table" data={this.state.wines}
      />
    )
  }
});
