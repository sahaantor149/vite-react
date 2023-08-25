import { useState } from "react";

function Header() {
  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className="header header-fix">
        <div className="header-top">
          <div className="template-ad">
            <img src="assets/img/icons/badge-icon.svg" alt="icon" />
            <h5>
              No 1, Realestate Website to Buy / Sell Your Place
              <span>First Listing Free!!!</span>
            </h5>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a
              id="mobile_btn"
              href="javascript:void(0);"
              onClick={() => setNav(true)}
            >
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a href="index-2.html" className="navbar-brand logo">
              <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div
            className={nav ? "main-menu-wrapper active" : "main-menu-wrapper"}
          >
            <div className="menu-header">
              <a href="index-2.html" className="menu-logo">
                <img
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
                onClick={() => setNav(false)}
              >
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <li className="active">
                <a href="index-2.html">Home</a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Listing <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Buy Property</a>
                    <ul className="submenu">
                      <li>
                        <a href="buy-property-grid.html">Buy Grid</a>
                      </li>
                      <li>
                        <a href="buy-property-list.html">Buy List</a>
                      </li>
                      <li>
                        <a href="buy-property-grid-sidebar.html">
                          Buy Grid With Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="buy-property-list-sidebar.html">
                          Buy List With Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="buy-grid-map.html">Buy Grid with map</a>
                      </li>
                      <li>
                        <a href="buy-list-map.html">Buy List with map</a>
                      </li>
                      <li>
                        <a href="buy-details.html">Buy Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Rent Property</a>
                    <ul className="submenu">
                      <li>
                        <a href="rent-property-grid.html">Rent Grid</a>
                      </li>
                      <li>
                        <a href="rent-property-list.html">Rent List</a>
                      </li>
                      <li>
                        <a href="rent-property-grid-sidebar.html">
                          Rent Grid With Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="rent-property-list-sidebar.html">
                          Rent List With Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="rent-grid-map.html">Rent Grid with map</a>
                      </li>
                      <li>
                        <a href="rent-list-map.html">Rent List with map</a>
                      </li>
                      <li>
                        <a href="rent-details.html">Rent Details</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Agent <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="agent-grid.html">Agent Grid</a>
                  </li>
                  <li>
                    <a href="agent-list.html">Agent List</a>
                  </li>
                  <li>
                    <a href="agent-grid-sidebar.html">
                      Agent Grid With Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="agent-list-sidebar.html">
                      Agent List With Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="agent-details.html">Agent Details</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Agency <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="agency-grid.html">Agency Grid</a>
                  </li>
                  <li>
                    <a href="agency-list.html">Agency List</a>
                  </li>
                  <li>
                    <a href="agency-grid-sidebar.html">
                      Agency Grid With Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="agency-list-sidebar.html">
                      Agency List With Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="agency-details.html">Agency Details</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Pages <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Authentication</a>
                    <ul className="submenu">
                      <li>
                        <a href="register.html">Signup</a>
                      </li>
                      <li>
                        <a href="login.html">Signin</a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="invoice-details.html">Invoice Details</a>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">Error Page</a>
                    <ul className="submenu">
                      <li>
                        <a href="error-404.html">404 Error</a>
                      </li>
                      <li>
                        <a href="error-500.html">500 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="our-team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="terms-condition.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Blog <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="blog-list.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li className="searchbar">
                <a href="javascript:void(0);" onClick={() => setSearch(true)}>
                  <img src="assets/img/icons/search-icon.svg" alt="img" />
                </a>
              </li>
              <li className="login-link">
                <a href="login.html">Sign Up</a>
              </li>
              <li className="login-link">
                <a href="register.html">Sign In</a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="new-property-btn">
              <a href="add-new-property.html">
                <i className="bx bxs-plus-circle"></i> Add New Property
              </a>
            </li>
            <li>
              <a href="register.html" className="btn btn-primary">
                <i className="feather-user-plus"></i>Sign Up
              </a>
            </li>
            <li>
              <a href="login.html" className="btn sign-btn">
                <i className="feather-unlock"></i>Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={
          search
            ? "search-popup js-search-popup visible"
            : "search-popup js-search-popup"
        }
      >
        <a
          href="javascript:void(0);"
          className="close-button"
          id="search-close"
          aria-label="Close search"
          onClick={() => setSearch(false)}
        >
          <i className="fa fa-close"></i>
        </a>
        <div className="popup-inner">
          <div className="inner-container">
            <form
              className="search-form"
              id="search-form"
              action="https://dreamsestate.dreamguystech.com/html/rent-property-grid.html"
            >
              <h3>What Are You Looking for?</h3>
              <div className="search-form-box flex">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Type a  Keyword...."
                  id="search-input"
                  aria-label="Type to search"
                  role="searchbox"
                />
                <button type="submit" className="search-icon">
                  <i className="bx bx-search"></i>
                </button>
              </div>
              <h5>Popular Properties</h5>
              <ul>
                <li>
                  <a href="rent-property-grid.html">Beautiful Condo Room</a>
                </li>
                <li>
                  <a href="rent-property-grid.html">Royal Apartment</a>
                </li>
                <li>
                  <a href="rent-property-grid.html">Grand Villa House</a>
                </li>
                <li>
                  <a href="rent-property-grid.html">Grand Mahaka</a>
                </li>
                <li>
                  <a href="rent-property-grid.html">Lunaria Residence</a>
                </li>
                <li>
                  <a href="rent-property-grid.html">Stephen Alexander Homes</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
