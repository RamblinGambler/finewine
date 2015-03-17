Wines = new Mongo.Collection('wines');

Meteor.methods({
    CSVWineDataInput: function(results) {
        var cleanData = results.data;
        cleanData.shift();
        cleanData.map(function(wine) {
            if (wine[3] === 'France') {
                Wines.upsert({name: wine[2], vintage: wine[1]}, {name: wine[2], vintage: wine[1], region: wine[4], price: wine[8]});
            }
        });
    }
});

Wines.helpers({
    lots: function() {
        return Lots.find({ wineId: this._id})
    }
});
