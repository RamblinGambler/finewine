window.Lot = React.createClass({
  getInitialState: function() {
    return {bid: 1};
  },
  bidChanged: function (event) {
    Meteor.call('submitWinningBid', [event.target.value, this._id], function(err, data) {});
  },
  render: function () {
    return (
      <section className="lot">
        <div className="lot-image">
          <img src={this.props.imgURL} />
        </div>
        <div className="lot-content">
          <h1>{this.props.wineName}</h1>
          <h1>Lot #{this.props.number}</h1>
          <p><strong>{this.props.vintage}</strong></p>
          <p><em>{this.props.region}</em></p>
          <fieldset className="winning-bid">
            <label htmlFor="winningBid">Winning Bid</label>
            <span className="currencyInput">€</span>
            <input type="number" name="winningBid" className="currency" min="0" max="9999" step="0.01" size="4" title="CDA Currency Format - no dollar sign and no comma(s) - cents (.##) are optional" onChange={this.bidChanged}/>
          </fieldset>
          <div className="button-group">
            <label>
              <span className="button-group-item" data-action="left">
              <i className="icon ion-chevron-left"></i>
              Previous
              </span>
            </label>
            <label>
              <span className="button-group-item" data-action="right">
              Next
              <i className="icon ion-chevron-right"></i>
              </span>
            </label>
          </div>
        </div>
      </section>
    )
  }
})