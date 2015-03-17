Template.winesList.helpers({
    wines: function() {
        return Wines.find();
    }
});

Template.winesList.events({
    "click [data-action='left']": function(e) {
        var dataTable = $(e.target).closest('.button-group').prev().find('table').DataTable();
        dataTable.page('previous').draw(false);
    },
    "click [data-action='right']": function(e) {
        var dataTable = $(e.target).closest('.button-group').prev().find('table').DataTable();
        dataTable.page('next').draw(false);
    }
});
