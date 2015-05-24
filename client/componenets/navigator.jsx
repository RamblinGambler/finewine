Navigator = React.createClass({

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
                      <li className="nav-link"><Link link={'/lots'} content={'Lots'}/></li>
                      <li className="nav-link"><Link link={'/auctions'} content={'Auctions'}/></li>
                  </ul>
              </nav>
          </div>
      </header>
		);
	}

});
