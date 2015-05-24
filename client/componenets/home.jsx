Home = React.createClass({

	render: function() {
		return (
			<Default>
				<Navigator/>
				<div className="hero">
				    <div className="hero-inner">
				        <a href="" className="hero-logo"><img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo Image" /></a>
				        <div className="hero-copy">
				            Homebar
				        </div>
				        <button>Learn More</button>
				    </div>
				</div>
				<Footer/>
			</Default>
		);
	}

});
