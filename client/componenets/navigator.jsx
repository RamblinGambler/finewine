Navigator = React.createClass({
	classesFor: function(link) {
		return this.props.location === link ? 'active-nav-item nav-link' : 'nav-link';
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		return this.props.location !== nextProps.location;
	},
	render: function() {
		return (
      <header className="navigation" role="banner">
          <div className="navigation-wrapper">
              <a href="/" className="logo">
                  <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo Image"/>
              </a>
              <a href="/" className="navigation-menu-button" id="js-mobile-menu">MENU</a>
              <nav role="navigation">
                  <ul id="js-navigation-menu" className="navigation-menu show">
										  <li className={this.classesFor('/auctions')}><Link link={'/auctions'} content={'Auctions'}/></li>
                      <li className={this.classesFor('/auction/anjou')}><Link link={'/auction/anjou'} content={'Auctions/Anjou'}/></li>
											<li className={this.classesFor('/auction/paris')}><Link link={'/auction/paris'} content={'Auctions/Paris'}/></li>
                  </ul>
              </nav>
          </div>
      </header>
		);
	}

});
