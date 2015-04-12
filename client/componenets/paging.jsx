Paging = ReactMeteor.createClass({

  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
  },

  getMeteorState: function () {

    return {
      // nextLot: Lots.findOne({number: this.props.number + 1})
    }
  },

  next: function () {
    // var nextLot = Lots.findOne({number: this.props.number + 1});
    // if (nextLot) {

      FlowRouter.go('/lot/' + this.props.nextLot._id);
    // }
    // console.log(nextLot)
  },

  render: function () {
    return (
      <div className="paging">
        <label onClick={this.prev}>
          <span className="paging-btn">
            <i className="icon ion-chevron-left"></i>
            <span>Previous</span>
          </span>
        </label>
        <label onClick={this.next}>
          <span className="paging-btn">
            <span>Next</span>
            <i className="icon ion-chevron-right"></i>
          </span>
        </label>
      </div>
    )
  }
});
