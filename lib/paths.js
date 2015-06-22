Paths = {
  lots: function(lot, number) {
    var number = number || lot.number
    return FlowRouter.path('lotShow', {name: lot.auctionName, number: number})
  },
  auction: function(name) {
    return '/auction/' + name;
  }


}
