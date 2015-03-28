
window.LotController = ReactMeteor.createClass({
  templateName: "LotController",

  render: function () {
    return (
      <section className='lot'>
       <img src={this.props.imgURL} />
      </section>
    )
  },
  getMeteorState: function() {
      return {
        info: 'testing'
      };
    }
});
