Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer-2" role="contentinfo">
        <div className="footer-logo">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png" alt="Logo image" />
        </div>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Products</a></li>
        </ul>
        <div className="footer-secondary-links">
          <ul>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
          <ul className="footer-social">
            <li><a href="">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/facebook-logo-circle.png" alt="Facebook" />
              </a></li>
            <li><a href="">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/twitter-logo-circle.png" alt="Twitter" />
              </a></li>
            <li><a href="">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/youtube-logo-circle.png" alt="YouTube" />
              </a></li>
          </ul>
        </div>
      </footer>
    );
  }
});
