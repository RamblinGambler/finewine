/** *
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */

var GridItemList = ReactMeteor.createClass({
  templateName: "GridItemList",
  render: function () {
    return (
      <div className="grid-items">
        <GridItem header='Header' subheader='a subheader as props from blaze to react' imgURL="//raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_2.png" />
       </div>
    )
  },

  getMeteorState: function() {
    return {
      info: 'testing'
    };
  }

});

