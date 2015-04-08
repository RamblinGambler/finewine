
var Table = Reactable.Table;

window.LotListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    // Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      console.log(Lots.find().fetch()[1]);
      return {
        wine: Lots.find().fetch()[1].number
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
      <Table className="table" data={[
          { Name: 'Griffin Smith', Age: 18 },
          { Age: 23,  Name: 'Lee Salminen' },
          { Age: 28, Position: 'Developer' },
        ]}
      />
    )
  }
});
