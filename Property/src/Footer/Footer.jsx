function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-border-img">
          <img src="assets/img/bg/line-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="footer-widget footer-about">
                <div className="footer-app-content">
                  <div className="footer-content-heading">
                    <h4>Get Our App</h4>
                    <p>Download the app and book your property</p>
                  </div>
                  <div className="download-app">
                    <a href="javascript:void(0);">
                      <img src="assets/img/google-pay.png" alt="google play" />
                    </a>
                    <a href="javascript:void(0);">
                      <img src="assets/img/app-store.png" alt="app store" />
                    </a>
                  </div>
                  <div className="social-links">
                    <h4>Connect with us</h4>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-facebook-f hi-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-instagram hi-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-behance hi-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-twitter hi-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-pinterest-p hi-icon"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa-brands fa-linkedin hi-icon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer-widget-list">
                <div className="footer-content-heading">
                  <h4>Explore</h4>
                </div>
                <ul>
                  <li>
                    <a href="rent-property-list.html">Listings</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blogs</a>
                  </li>
                  <li>
                    <a href="agency-grid.html">Agency</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer-widget-list">
                <div className="footer-content-heading">
                  <h4>Categories</h4>
                </div>
                <ul>
                  <li>
                    <a href="javascript:void(0);">Apartments</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Office</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Villas</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Flat</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <div className="footer-widget-list">
                <div className="footer-content-heading">
                  <h4>Locations</h4>
                </div>
                <ul>
                  <li>
                    <a href="javascript:void(0);">United States</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Canada</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">India</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">UK</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Australia</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
              <div className="footer-widget-list">
                <div className="footer-content-heading">
                  <h4>Quick Links</h4>
                </div>
                <ul>
                  <li>
                    <a href="about-us.html">About</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="terms-condition.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>Copyright 2023 - All right reserved DreamsEstate</p>
            </div>
            <div className="company-logo">
              <p>a product of</p>
              <a href="https://dreamguystech.com/">
                <img src="assets/img/company-logo.png" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
