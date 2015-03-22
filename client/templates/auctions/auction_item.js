Template.auctionItem.helpers({
    lots: function() {
        return Lots.find();
    }
});

Template.auctionItem.events({
    "click [data-action='left']": function(e) {
        var dataTable = $(e.target).closest('.lots-list').find('table').DataTable();
        dataTable.page('previous').draw(false);
    },
    "click [data-action='right']": function(e) {
        var dataTable = $(e.target).closest('.lots-list').find('table').DataTable();
        dataTable.page('next').draw(false);
    }
});

Template.wineNameCell.events({
    "click [data-action='go']": function () {
        Router.go('lotItem', {_id: this._id});
    }
});
