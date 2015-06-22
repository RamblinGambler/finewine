NotFound = React.createClass({

	render: function() {
		return (
			<Default>
				<Navigator location={window.location.pathname}/>
				<div className="hero">
          <h1>C'est Non Ici</h1>
				</div>
				<Footer/>
			</Default>
		);
	}

});
