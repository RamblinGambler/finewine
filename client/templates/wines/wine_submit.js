Template.wineSubmit.events({
    'click .file': function(e) {
        e.preventDefault();

        $("input[type=file]").parse({
            config: {
                complete: function(results, file) {
                    Meteor.call('CSVWineDataInput', results, function() {
                        //Router.go('winesList');
                    });
                }
                // base config to use for each file
            },
            before: function(file, inputElem) {
            },
            error: function(err, file, inputElem, reason) {
                // executed if an error occurs while loading the file,
                // or if before callback aborted for some reason
            },
            complete: function() {
                Router.go('winesList');
            }
        });
    }
});