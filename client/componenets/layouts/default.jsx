window.Default = React.createClass({
  getMeteorState: function() {
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <div>
        <div className="default">
          <div className="main-container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});