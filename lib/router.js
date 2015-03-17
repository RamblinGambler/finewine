Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        //return Meteor.subscribe('posts');
    }
});

var checkAdmin = function() {
    user = Meteor.user();
    if(!Roles.userIsInRole(user, ['admin'])) {
        this.redirect('home');
        this.stop();
    } else {
        this.next();
    }
};

Router.route('/wine-submit', {name: 'wineSubmit', onBeforeAction: checkAdmin});
Router.route('/auction-submit', {name: 'auctionSubmit', onBeforeAction: checkAdmin});
Router.route('/', {name: 'home'});
Router.route('/wines', {name: 'winesList', onBeforeAction: checkAdmin});
Router.route('/auction/:_id', {
    name: 'auctionItem',
    data: function() { return Auctions.findOne(this.params._id)},
    onBeforeAction: checkAdmin

});
Router.route('/lot/:_id', {
    name: 'lotItem',
    data: function() { return Lots.findOne(this.params._id); },
    onBeforeAction: checkAdmin
});

