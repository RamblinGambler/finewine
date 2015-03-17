Lots = new Mongo.Collection('lots');

Lots.helpers({
    wine: function() {
        return Wines.findOne(this.wineId);
    }
});

Meteor.methods({
    findLastLot: function() {
        var lastLot = Lots.find({}, {sort: {number:-1}, limit:1});
        var arr = lastLot.fetch();
        return {
            _id: arr[0]._id
        }
    },
    submitWinningBid: function(arr) {
        //var lotUpdate = Lots.findOne({_id: arr[1]});
        Lots.update(arr[1], {$set: {winningBid: arr[0]}});
        return{
            message: "yes"
        }
    }
 });