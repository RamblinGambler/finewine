window.Paging = React.createClass({
  render: function () {
    return (
      <div className="paging">
        <label>
          <span className="paging-btn">
            <i className="icon ion-chevron-left"></i>
            <span>Previous</span>
          </span>
        </label>
        <label>
          <span className="paging-btn">
            <span>Next</span>
            <i className="icon ion-chevron-right"></i>
          </span>
        </label>
      </div>
    )
  }
});
