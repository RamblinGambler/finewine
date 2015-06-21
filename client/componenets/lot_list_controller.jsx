var Table = Reactable.Table;

LotListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
    Meteor.subscribe("auctions");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      var auction = Auctions.findOne({name: this.props.auction});
      return {
        lots: auction.lots().fetch().map(function(lot) {
          var path = Paths.lots(lot.number)
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
  render: function () {
    return (
      <div>
        <Navigator/>
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
