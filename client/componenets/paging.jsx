Paging = ReactMeteor.createClass({
  render: function () {
    return (
      <div className="paging">
        <label >
          <a href={this.props.prevPath} className="paging-btn">
            <i className="icon ion-chevron-left"></i>
            <span>Previous</span>
          </a>
        </label>
        <label>
          <a href={this.props.nextPath} className="paging-btn">
            <span>Next</span>
            <i className="icon ion-chevron-right"></i>
          </a>
        </label>
      </div>
    )
  }
});
