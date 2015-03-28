// Router.configure({
//     layoutTemplate: 'layout',
//     //loadingTemplate: 'loading',
//     notFoundTemplate: 'notFound',
//     waitOn: function() {
//         //return Meteor.subscribe('posts');
//     }
// });

// var checkAdmin = function() {
//     user = Meteor.user();
//     if(!Roles.userIsInRole(user, ['admin'])) {
//         this.redirect('home');
//         this.stop();
//     } else {
//         this.next();
//     }
// };

// Router.route('/wine-submit', {name: 'wineSubmit'});
// Router.route('/auction-submit', {name: 'auctionSubmit'});
// Router.route('/', {name: 'home'});
// Router.route('/wines', {name: 'winesList'});
// Router.route('/auction/:_id', {
//     name: 'auctionItem',
//     data: function() {
//         return Auctions.findOne(this.params._id);
//     }
// });
// Router.route('/lot/:_id', {
//     name: 'lotItem',
//     data: function() {
//         return Lots.findOne(this.params._id);
//     }
// });

FlowRouter.route('/wine/:wineId', {
    subscriptions: function(params) {
        console.log("subscribe and register this subscription as 'myPost'");
        this.register('wine', Meteor.subscribe('blogPost', params.postId));
    },
    action: function(params) {
        console.log("Yeah! We are on the post:", params.postId);
    }
});