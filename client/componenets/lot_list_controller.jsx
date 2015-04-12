
var Table = Reactable.Table;

LotListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    // Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      return {
        lots: Lots.find().fetch().map(function(lot) {
          var link = 'lot/' + lot._id;
          var wine = Wines.findOne(lot.wineId) || {};
          return {
            wine: <Link link={link} content={wine.name}/>,
            vintage: <Link link={link} content={wine.vintage}/>,
            region: <Link link={link} content={wine.region}/>,
            number: <Link link={link} content={lot.number}/>,
            winningBid: <Link link={link} content={lot.winningBid}/>
          }
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
      <Table className="table lot-table" data={this.state.lots}
        itemsPerPage={4}
        filterable={['wine', 'number']}
        defaultSort={{column: 'number', direction: 'asc'}}
      />
    )
  }
});
