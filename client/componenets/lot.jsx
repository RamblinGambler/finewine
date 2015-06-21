window.Lot = React.createClass({
  getInitialState: function() {
    return {bid: 1};
  },
  bidChanged: function (event) {
    Meteor.call('submitWinningBid', [event.target.value, this._id], function(err, data) {});
  },
  previous: function () {
    if (this.props.number > 1 ) {
      return Paths.lots(this.props.number - 1)
    } else {
      return null
    }
  },
  next: function () {
    if (this.props.number < this.props.total) {
      return Paths.lots(this.props.number + 1)
    } else {
      return null
    }
  },
  render: function () {
    return (
      <div>
      <Navigator/>
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
            <input
              type="number"
              name="winningBid"
              className="currency"
              min="0" max="9999"
              step="1" size="4"
              title="CDA Currency Format - no euro sign and no comma(s) - cents (.##) are optional"
              onChange={this.bidChanged}
              />
          </fieldset>
          <Paging
            prevPath={this.previous()}
            nextPath={this.next()}
            />
        </div>
      </section>
      <Footer/>
    </div>
    )
  }
})
