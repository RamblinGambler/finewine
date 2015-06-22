var Table = Reactable.Table;

LotListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      var name = FlowRouter.getParam('name')
      return {
        lots: Lots.find({auctionName: name }).fetch().map(function(lot) {
          var path = Paths.lots(lot)
          var wine = Wines.findOne(lot.wineId) || {};
          return {
            wine: <Link link={path} content={wine.name}/>,
            vintage: <Link link={path} content={wine.vintage}/>,
            region: <Link link={path} content={wine.region}/>,
            number: <Link link={path} content={lot.number}/>,
            winningBid: <Link link={path} content={lot.winningBid}/>
          }
        }),
      }
    } else {
      return {
        lots: []
      }
    }
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.lots.length;
  },
  render: function () {
    return (
      <div>
        <Navigator location={window.location.pathname}/>
        <Table className="table lot-table" data={this.state.lots}
          itemsPerPage={10}
          filterable={['wine', 'number']}
          defaultSort={{column: 'number', direction: 'asc'}}
        />
      <Footer/>
      </div>
    )
  }
});
