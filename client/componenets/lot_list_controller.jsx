
var Table = Reactable.Table;

LotListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    // Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      console.log(Lots.find().fetch()[1]);
      return {
        wines: Lots.find().fetch().map(function(obj) {
          delete obj._id
          obj.name = 'Merlot';
          return obj
        }),
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
