Auctions = new Mongo.Collection('auctions');

Meteor.methods({
    CSVAuctionDataInput: function(results) {
        var cleanData = results.data;

        // TODO clean and parse excel data

        var auctionId = Auctions.insert({name: name});
        cleanData.map(function(lot) {
            var wineId = Wines.upsert({name: lot[2], vintage: lot[1]}, {name: lot[2], vintage: lot[1]});
            Lots.insert({number: lot[2], wineId: wineId, auctionId: auctionId});
        });
    }
});

Auctions.helpers({
    lots: function() {
        return Lots.find({ auctionId: this._id})
    }
});
