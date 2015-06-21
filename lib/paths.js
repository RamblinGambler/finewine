Paths = {
  lots: function(lot, number) {
    number = number || lot.number
    return '/auction/' + lot.auctionName + '/lot/' + number
  }

}
