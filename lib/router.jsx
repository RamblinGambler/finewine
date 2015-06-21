FlowRouter.notfound = {
    action: function(params) {
        React.render(<NotFound />, document.body)
    }
};

FlowRouter.route('/', {
    subscriptions: function(params) {
    },
    action: function(params) {

        React.render(<Home/>, document.body)
    }
});

FlowRouter.route('/auction/:name/lot/:number', {
    subscriptions: function(params) {
        this.register('lot', Meteor.subscribe('lots', {auctionName: params.name, number: params.number}));
    },
    action: function(params) {
        React.render(<LotController />, document.body)
    }
});

FlowRouter.route('/auction/:name', {
    subscriptions: function(params) {
        this.register('lots', Meteor.subscribe('lots', {auctionName: params.name}));
    },
    action: function(params) {
        React.render(<LotListController auction={params.name}/>, document.body)
    }
});

FlowRouter.route('/auctions', {
    subscriptions: function(params) {
        this.register('auctions', Meteor.subscribe('auctions'));
    },
    action: function(params) {
        React.render(<AuctionListController />, document.body)
    }
});
