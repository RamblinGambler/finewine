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

FlowRouter.route('/lot/:lotId', {
    subscriptions: function(params) {
        this.register('lot', Meteor.subscribe('lots', params.lotId));
    },
    action: function(params) {
        React.render(<LotController />, document.body)
    }
});

FlowRouter.route('/lots', {
    subscriptions: function(params) {
        this.register('lots', Meteor.subscribe('lots'));
    },
    action: function(params) {

        React.render(<LotListController />, document.body)
    }
});
