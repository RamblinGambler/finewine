// Template.lotItem.events({
//     "click [data-action='right']": function() {
//         var nextLot = Lots.findOne({number: this.number + 1});
//         if (nextLot) {
//             Router.go('lotItem', {_id: nextLot._id});
//         } else {
//             var firstLot = Lots.findOne({number: 0});
//             Router.go('lotItem', {_id: firstLot._id});
//         }
//     },
//     "click [data-action='left']": function() {
//         var prevLot = Lots.findOne({number: this.number - 1});
//         if (prevLot) {
//             Router.go('lotItem', {_id: prevLot._id});
//         } else {
//             Meteor.call('findLastLot', function(err, data) {
//                 if (data) {
//                     Router.go('lotItem', {_id: data._id});
//                 }
//             });
//         }
//     },
//     "blur [name='winningBid']": function() {
//         var value = $("[name='winningBid']").val();
//         Meteor.call('submitWinningBid', [value, this._id], function(err, data) {

//         });
//     }
// });