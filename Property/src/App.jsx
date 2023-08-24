import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const options = {
  loop: true,
  margin: 24,
  nav: true,
  dots: false,
  smartSpeed: 2000,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  navContainer: ".mynav1",
  responsive: {
    0: {
      items: 1,
    },

    550: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const options2 = {
  loop: true,
  margin: 24,
  nav: true,
  dots: false,
  smartSpeed: 2000,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const options3 = {
  loop: true,
  margin: 24,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1,
    },

    550: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const options4 = {
  loop: true,
  margin: 24,
  nav: true,
  dots: false,
  smartSpeed: 2000,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const options5 = {
  loop: true,
  autoplay: true,
  margin: 24,
  nav: false,
  dots: false,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 2,
    },

    550: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
};

const options6 = {
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const options7 = {
  loop: true,
  margin: 24,
  nav: true,
  dots: false,
  smartSpeed: 2000,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

function App() {
  const [search, setSearch] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="main-wrapper">
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
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="index-2.html" className="navbar-brand logo">
                <img
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
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

        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="banner-content" data-aos="fade-down">
                  <h1>
                    Find Your Best Dream House for{" "}
                    <span>Rental, Buy & Sell...</span>
                  </h1>
                  <p>
                    Properties for buy / rent in in your location. We have more
                    than 3000+ listings for you to choose
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-search" data-aos="fade-down">
                  <div className="banner-tab">
                    <ul className="nav nav-tabs" id="bannerTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="buy-property"
                          data-bs-toggle="tab"
                          href="#buy_property"
                          role="tab"
                          aria-controls="buy_property"
                          aria-selected="true"
                        >
                          <img src="assets/img/icons/buy-icon.svg" alt="icon" />
                          Buy a Property
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="rent-property"
                          data-bs-toggle="tab"
                          href="#rent_property"
                          role="tab"
                          aria-controls="rent_property"
                          aria-selected="false"
                        >
                          <img
                            src="assets/img/icons/rent-icon.svg"
                            alt="icon"
                          />
                          Rent a Property
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="bannerTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="buy_property"
                      role="tabpanel"
                      aria-labelledby="buy-property"
                    >
                      <div className="banner-tab-property">
                        <form action="#">
                          <div className="banner-property-info">
                            <div className="banner-property-grid">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Keyword"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <select className="select">
                                <option value="0">Property Type</option>
                                <option value="1">Buy Property</option>
                                <option value="2">Rent Property</option>
                              </select>
                            </div>
                            <div className="banner-property-grid">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Address"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Min Price"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Max Price"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <a
                                href="buy-property-grid.html"
                                className="btn-primary"
                              >
                                <span>
                                  <i className="feather-search"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="rent_property"
                      role="tabpanel"
                      aria-labelledby="rent-property"
                    >
                      <div className="banner-tab-property">
                        <form action="#">
                          <div className="banner-property-info">
                            <div className="banner-property-grid">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Keyword"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <select className="select">
                                <option value="0">Property Type</option>
                                <option value="1">Buy Property</option>
                                <option value="2">Rent Property</option>
                              </select>
                            </div>
                            <div className="banner-property-grid">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Address"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Min Price"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Max Price"
                              />
                            </div>
                            <div className="banner-property-grid">
                              <a
                                href="rent-property-grid.html"
                                className="btn-primary"
                              >
                                <span>
                                  <i className="feather-search"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="howit-work">
          <div className="container">
            <div className="section-heading text-center">
              <h2>How It Works</h2>
              <div className="sec-line">
                <span className="sec-line1"></span>
                <span className="sec-line2"></span>
              </div>
              <p>Follow these 3 steps to book your place</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="howit-work-card" data-aos="fade-down">
                  <div className="work-card-icon">
                    <span>
                      <img src="assets/img/icons/work-icon-1.svg" alt="icon" />
                    </span>
                  </div>
                  <h4>01. Search for Location</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis mollis et sem sed sollicitudin. Donec non odio…
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="howit-work-card"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="work-card-icon">
                    <span className="bg-red">
                      <img src="assets/img/icons/work-icon-2.svg" alt="icon" />
                    </span>
                  </div>
                  <h4>02. Select Property Type</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis mollis et sem sed sollicitudin. Donec non odio…
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="howit-work-card"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="work-card-icon">
                    <span className="bg-green">
                      <img src="assets/img/icons/work-icon-3.svg" alt="icon" />
                    </span>
                  </div>
                  <h4>03. Book Your Property</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis mollis et sem sed sollicitudin. Donec non odio…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="property-type-sec">
          <div className="section-shape-imgs">
            <img
              src="assets/img/shapes/property-sec-bg-1.png"
              className="rectangle-left"
              alt="icon"
            />
            <img
              src="assets/img/shapes/property-sec-bg-2.png"
              className="rectangle-right"
              alt="icon"
            />
            <img
              src="assets/img/icons/red-circle.svg"
              className="bg-09"
              alt="Image"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="section-heading"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h2>Explore by Property Type</h2>
                  <div className="sec-line">
                    <span className="sec-line1"></span>
                    <span className="sec-line2"></span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis mollis et sem sed
                  </p>
                </div>
                <div className="owl-navigation">
                  <div className="owl-nav mynav1 nav-control"></div>
                </div>
              </div>
              <div className="col-md-8">
                <OwlCarousel {...options}>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Houses</h4>
                      <p>30 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Offices</h4>
                      <p>25 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Villas</h4>
                      <p>40 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-4.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Apartment</h4>
                      <p>35 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Villas</h4>
                      <p>40 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Houses</h4>
                      <p>30 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="property-img">
                      <img
                        src="assets/img/icons/property-icon-4.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="property-name">
                      <h4>Apartment</h4>
                      <p>35 Properties</p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-property-sec">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Featured Properties for Sales</h2>
              <div className="sec-line">
                <span className="sec-line1"></span>
                <span className="sec-line2"></span>
              </div>
              <p>Hand-Picked selection of quality places</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel className="feature-slider" {...options2}>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-1.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$41,000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                              <div className="new-featured">
                                <span>New</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite selected">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <p className="rating-review">
                              <span>5.0</span>(20 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Place perfect for nature
                            </a>
                          </h3>
                          <p>
                            <span>
                              <i className="feather-map-pin"></i>
                            </span>
                            318-S Oakley Blvd, Chicago, IL 60612, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              4 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              4 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              35000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">16 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">
                                Apartment
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-2.jpg"
                            />
                          </a>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="product-amount">
                            <span>$78,000</span>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <p className="rating-review">
                              <span>3.0</span>(10 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Beautiful Condo Room</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>470 Park Ave S,
                            New York, NY 10016
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              3 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              2 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              15000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">17 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">
                                Condos
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-3.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$63,000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <p className="rating-review">
                              <span>4.0</span>(28 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Summer house</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>82-25 Parsons
                            Blvd, Jamaica, NY 11432, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              2 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              1 Bath
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              5000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">13 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">House</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a
                            href="rent-detail-viewhtml.html"
                            className="property-img"
                          >
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-4.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$51,000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-04.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <p className="rating-review">
                              <span>5.0</span>(15 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Minimalist and bright flat
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>518-520 8th Ave,
                            New York, NY 10018, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              3 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              1 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              25000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">18 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">Flats</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-5.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$29,000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-05.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <p className="rating-review">
                              <span>5.0</span>(20 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Two storey modern flat
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>470 Park Ave S,
                            New York, NY 10016
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              2 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              2 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              31000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">19 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">Flat</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-2.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$80,000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-06.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <p className="rating-review">
                              <span>4.0</span>(12 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Modern apartment</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>122 N Morgan St,
                            Chicago, IL 60607, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              3 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              3 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              12000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">20 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">
                                Apartment
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-4.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$51,000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-07.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">
                              5.0 (60 Reviews)
                            </span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Minimalist and bright flat
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>518-520 8th Ave,
                            New York, NY 10018, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              4 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              2 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              23000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">21 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">Flats</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-3.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <span>$41000</span>
                          </div>
                          <div className="feature-rating">
                            <div>
                              <div className="featured">
                                <span>Featured</span>
                              </div>
                            </div>
                            <a href="javascript:void(0)">
                              <div className="favourite">
                                <span>
                                  <i className="fa-regular fa-heart"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="user-avatar">
                            <img
                              src="assets/img/profiles/avatar-05.jpg"
                              alt="User"
                            />
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">
                              5.0 (50 Reviews)
                            </span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Place perfect for nature
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i>318-S Oakley
                            Blvd, Chicago, IL 60612, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              2 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              4 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              15000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between">
                            <li>
                              <span className="list">Listed on : </span>
                              <span className="date">16 Jan 2023</span>
                            </li>
                            <li>
                              <span className="category list">Category : </span>
                              <span className="category-value date">
                                Apartment
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>

                <div
                  className="view-property-btn d-flex justify-content-center"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <a href="rent-property-grid.html" className="btn-primary">
                    View All Properties
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-imgs">
            <img
              src="assets/img/bg/price-bg.png"
              className="bg-01"
              alt="icon"
            />
            <img
              src="assets/img/icons/blue-circle.svg"
              className="bg-02"
              alt="icon"
            />
            <img
              src="assets/img/icons/red-circle.svg"
              className="bg-03"
              alt="icon"
            />
          </div>
        </section>

        <section className="cities-list-sec">
          <div className="container">
            <div className="section-heading">
              <h2>Cities With Listing</h2>
              <div className="sec-line">
                <span className="sec-line1"></span>
                <span className="sec-line2"></span>
              </div>
              <p>Destinations we love the most</p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <OwlCarousel className="city-card-slider" {...options3}>
                  <div
                    className="city-first-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-1.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>New York</h5>
                        <p>300 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-2.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Singapore</h5>
                        <p>400 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="city-card-two"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-3.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Thailand</h5>
                        <p>200 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-4.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Argentina</h5>
                        <p>740 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="city-card-three"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-5.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>United Kingdom</h5>
                        <p>1450 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-1.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>United Arab Emirates</h5>
                        <p>100 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="city-first-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-1.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>USA</h5>
                        <p>320 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <img src="assets/img/city/city-2.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Singapore</h5>
                        <p>500 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <a href="rent-property-grid.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-property-sec for-rent">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Featured Properties for Rent</h2>
              <div className="sec-line">
                <span className="sec-line1"></span>
                <span className="sec-line2"></span>
              </div>
              <p>Hand-picked selection of quality places</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <OwlCarousel className="feature-slider" {...options4}>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-6.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$2,200 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <div className="new-featured">
                            <span>New</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite selected">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Beautiful Condo Room</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 318-S Oakley
                            Blvd, Chicago, IL 60612, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              4 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              4 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              35000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-01.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Marc Silva</a>
                                </h6>
                                <p>Newyork</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-7.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$1,400 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Grand Mahaka</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 470 Park Ave S,
                            New York, NY 10016
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              4 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              4 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              35000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="javascript:void(0);">
                                <img
                                  src="assets/img/profiles/avatar-02.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Karen Maria</a>
                                </h6>
                                <p>South Dokata</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-8.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$1,500 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite selected">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Royal Apartment</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 82-25 Parsons
                            Blvd, Jamaica, NY 11432, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              2 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              3 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              12000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-03.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Scott Gwin</a>
                                </h6>
                                <p>Minipoliies</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-9.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$3,500 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Lunaria Residence</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 518-520 8th Ave,
                            New York, NY 10018, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              3 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              2 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              23000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-04.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Burdette</a>
                                </h6>
                                <p>Cambridge</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-10.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$4,500 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">Grand Villa house</a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 470 Park Ave S,
                            New York, NY 10016
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              4 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              3 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              5000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-05.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Kell Robinson</a>
                                </h6>
                                <p>USA</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-11.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$2,400 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Stephen Alexander Homes
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 122 N Morgan St,
                            Chicago, IL 60607, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              2 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              3 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              25000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-07.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Pittman</a>
                                </h6>
                                <p>Cambridge</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-7.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$1,400 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Minimalist and bright flat
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 518-520 8th Ave,
                            New York, NY 10018, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              2 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              2 Baths
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              18000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-10.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">John Doe</a>
                                </h6>
                                <p>Newyork</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <a href="rent-details.html" className="property-img">
                            <img
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-9.jpg"
                            />
                          </a>
                          <div className="product-amount">
                            <h5>
                              <span>$3,500 </span> / Night
                            </h5>
                          </div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                          <a href="javascript:void(0)">
                            <div className="favourite">
                              <span>
                                <i className="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="pro-content">
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                              <i className="fa-solid fa-star checked"></i>
                            </span>
                            <span className="rating-review">Excellent</span>
                          </div>
                          <h3 className="title">
                            <a href="rent-details.html">
                              Place perfect for nature
                            </a>
                          </h3>
                          <p>
                            <i className="feather-map-pin"></i> 318-S Oakley
                            Blvd, Chicago, IL 60612, USA
                          </p>
                          <ul className="d-flex details">
                            <li>
                              <img
                                src="assets/img/icons/bed-icon.svg"
                                alt="bed-icon"
                              />
                              3 Beds
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/bath-icon.svg"
                                alt="bath-icon"
                              />
                              1 Bath
                            </li>
                            <li>
                              <img
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              12000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <a href="rent-details.html">
                                <img
                                  src="assets/img/profiles/avatar-12.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </a>
                              <div className="user-name">
                                <h6>
                                  <a href="rent-details.html">Richard</a>
                                </h6>
                                <p>Newyork</p>
                              </div>
                            </li>
                            <li>
                              <a
                                href="rent-details.html"
                                className="btn-primary"
                              >
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
                <div
                  className="view-property-btn d-flex justify-content-center"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <a href="rent-property-grid.html" className="btn-primary">
                    View All Properties
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-imgs">
            <img
              src="assets/img/bg/price-bg.png"
              className="bg-04"
              alt="Image"
            />
          </div>
        </section>

        <section className="counter-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div
                  className="counter-box flex-fill"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="counter-icon">
                    <img src="assets/img/icons/counter-icon-1.svg" alt="icon" />
                  </div>
                  <div className="counter-value">
                    <h3 className="dash-count">
                      <CountUp end={50} />K
                    </h3>
                    <h5>Listings Added</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div
                  className="counter-box flex-fill"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="counter-icon">
                    <img src="assets/img/icons/counter-icon-2.svg" alt="icon" />
                  </div>
                  <div className="counter-value">
                    <h3 className="dash-count">
                      <CountUp end={3000} />+
                    </h3>
                    <h5>Agents Listed</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div
                  className="counter-box flex-fill"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="counter-icon">
                    <img src="assets/img/icons/counter-icon-3.svg" alt="icon" />
                  </div>
                  <div className="counter-value">
                    <h3 className="dash-count">
                      <CountUp end={2000} />+
                    </h3>
                    <h5>Sales Completed</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div
                  className="counter-box flex-fill"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="counter-icon">
                    <img src="assets/img/icons/counter-icon-4.svg" alt="icon" />
                  </div>
                  <div className="counter-value">
                    <h3 className="dash-count">
                      <CountUp end={5000} />+
                    </h3>
                    <h5>Users</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="main-property-sec">
          <div className="container">
            <div className="main-property-details">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="single-property-card">
                    <div className="img-card">
                      <a href="buy-property-grid.html">
                        <img
                          src="assets/img/city/property-img-1.jpg"
                          alt="Property Image"
                        />
                      </a>
                    </div>
                    <div className="buy-property">
                      <h4>
                        <a href="buy-property-grid.html">Buy a Property</a>
                      </h4>
                      <a
                        href="buy-property-grid.html"
                        className="arrow buy-arrow"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="single-property-card">
                    <div className="img-card">
                      <a href="rent-property-grid.html">
                        <img
                          src="assets/img/city/property-img-2.jpg"
                          alt="Property Image"
                        />
                      </a>
                    </div>
                    <div className="buy-property">
                      <h4>
                        <a href="rent-property-gridhtml.html">
                          Sell a Property
                        </a>
                      </h4>
                      <a
                        href="rent-property-grid.html"
                        className="arrow sell-arrow"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <div className="single-property-card">
                    <div className="img-card">
                      <a href="rent-property-grid.html">
                        <img
                          src="assets/img/city/property-img-3.jpg"
                          alt="Property Image"
                        />
                      </a>
                    </div>
                    <div className="buy-property">
                      <h4>
                        <a href="rent-property-grid.html">Rent a Property</a>
                      </h4>
                      <a
                        href="rent-property-grid.html"
                        className="arrow rent-arrow"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-imgs">
                <img
                  src="assets/img/bg/prop-bg.png"
                  className="bg-10"
                  alt="icon"
                />
              </div>
            </div>

            <div className="partners-sec">
              <div className="section-heading text-center">
                <h2>Hundreds of Partners Around the World</h2>
                <div className="sec-line">
                  <span className="sec-line1"></span>
                  <span className="sec-line2"></span>
                </div>
                <p>
                  Every day, we build trust through communication, transparency,
                  and results.
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <OwlCarousel className="partners-slider" {...options5}>
                    <div className="partner-icon">
                      <img
                        src="assets/img/icons/partner-icon-1.svg"
                        alt="Partners"
                      />
                    </div>
                    <div className="partner-icon">
                      <img
                        src="assets/img/icons/partner-icon-2.svg"
                        alt="Partners"
                      />
                    </div>
                    <div className="partner-icon">
                      <img
                        src="assets/img/icons/partner-icon-3.svg"
                        alt="Partners"
                      />
                    </div>
                    <div className="partner-icon">
                      <img
                        src="assets/img/icons/partner-icon-4.svg"
                        alt="Partners"
                      />
                    </div>
                    <div className="partner-icon">
                      <img
                        src="assets/img/icons/partner-icon-5.svg"
                        alt="Partners"
                      />
                    </div>
                    <div className="partner-icon">
                      <img
                        src="assets/img/icons/partner-icon-6.svg"
                        alt="Partners"
                      />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-imgs">
            <img
              src="assets/img/icons/blue-circle.svg"
              className="bg-08"
              alt="icon"
            />
          </div>
        </section>

        <section className="testimonial-sec">
          <div className="container">
            <div className="section-heading">
              <h2>Testimonials</h2>
              <div className="sec-line">
                <span className="sec-line1"></span>
                <span className="sec-line2"></span>
              </div>
              <p>What our happy client says</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel className="testimonial-slider" {...options7}>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="user-icon">
                      <a href="javascript:void(0);">
                        <img
                          src="assets/img/profiles/avatar-01.jpg"
                          alt="User"
                        />
                      </a>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <a href="javascript:void(0);">Horace Cole</a>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="user-icon">
                      <a href="javascript:void(0);">
                        <img
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="User"
                        />
                      </a>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <a href="javascript:void(0);">Karen Maria</a>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="user-icon">
                      <a href="javascript:void(0);">
                        <img
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User"
                        />
                      </a>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <a href="javascript:void(0);">Jack Nitzsche</a>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="user-icon">
                      <a href="javascript:void(0);">
                        <img
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User"
                        />
                      </a>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <a href="javascript:void(0);">Sofia Retz</a>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="user-icon">
                      <a href="javascript:void(0);">
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User"
                        />
                      </a>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                      beatae asperiores dolor magnam fuga. Sed fuga est harum
                      quo nesciunt sint. Optio veniam...Omnis velit quia.
                      Perspiciatis et cupiditate. Voluptatum beatae asperiores
                      dolor magnam fuga. Sed fuga est harum quo nesciunt sint.
                      Optio veniam...
                    </p>
                    <h4>
                      <a href="javascript:void(0);">John Doe</a>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        <section className="price-section">
          <div className="container">
            <div className="pricing-tab">
              <div className="section-heading">
                <h2>Pricing & Subscriptions</h2>
                <div className="sec-line">
                  <span className="sec-line1"></span>
                  <span className="sec-line2"></span>
                </div>
                <p>Checkout our package, choose your package wisely</p>
              </div>
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#monthly-price"
                    type="button"
                    role="tab"
                    aria-controls="monthly-price"
                    aria-selected="true"
                  >
                    Monthly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#yearly-price"
                    type="button"
                    role="tab"
                    aria-controls="yearly-price"
                    aria-selected="false"
                  >
                    Yearly
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="monthly-price"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="price-card aos"
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                    >
                      <div className="price-title">
                        <h3>Standard</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            10 Listing Per Login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Enquiry On Listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            24 Hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Onboarding & Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Transaction Tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <a href="login.html" className="btn-primary">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div
                      className="price-card"
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      <div className="price-sticker">
                        <img
                          src="assets/img/icons/pricing-icon.svg"
                          alt="price-sticker"
                        />
                      </div>
                      <div className="price-title">
                        <h3>Professional</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features professional">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            20 Listing Per Login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Enquiry On Listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            24 Hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Onboarding & Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Transaction Tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <a href="login.html" className="btn-primary">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div
                      className="price-card"
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="price-title">
                        <h3>Enterprise</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features enterprise">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            30 Listing Per Login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Enquiry On Listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            24 Hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Onboarding & Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Transaction Tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <a href="login.html" className="btn-primary">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="yearly-price"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="price-card">
                      <div className="price-title">
                        <h3>Standard</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            50 Listing per login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            150+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Enquiry on listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            24 hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Onboarding & Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Transaction tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <a href="login.html" className="btn-primary">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="price-card">
                      <div className="price-title">
                        <h3>Professional</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features professional">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            80 Listing per login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            200+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Enquiry on listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            24 hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Onboarding & Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Transaction tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <a href="login.html" className="btn-primary">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="price-card">
                      <div className="price-title">
                        <h3>Enterprise</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features enterprise">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            70 Listing per login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            300+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Enquiry on listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            24 hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Onboarding & Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Transaction tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check"></i>
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <a href="login.html" className="btn-primary">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-imgs">
            <img
              src="assets/img/bg/price-bg.png"
              className="bg-05"
              alt="icon"
            />
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="faq-img">
                  <img src="assets/img/faq-img.jpg" alt="icon" />
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className="section-heading"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h2>Frequently Asked Questions</h2>
                  <div className="sec-line">
                    <span className="sec-line1"></span>
                    <span className="sec-line2"></span>
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt
                  </p>
                </div>
                <div
                  className="faq-card"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h4 className="faq-title">
                    <a
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#faqone"
                      aria-expanded="false"
                    >
                      1. What are the costs to buy a house?
                    </a>
                  </h4>
                  <div id="faqone" className="card-collapse collapse">
                    <div className="faq-info">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="faq-card"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h4 className="faq-title">
                    <a
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#faqtwo"
                      aria-expanded="false"
                    >
                      2. What are the steps to sell a house?
                    </a>
                  </h4>
                  <div id="faqtwo" className="card-collapse collapse">
                    <div className="faq-info">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="faq-card"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h4 className="faq-title">
                    <a
                      className
                      data-bs-toggle="collapse"
                      href="#faqthree"
                      aria-expanded="false"
                    >
                      3. Do you have loan consultants?
                    </a>
                  </h4>
                  <div id="faqthree" className="card-collapse collapse show">
                    <div className="faq-info">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="faq-card"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h4 className="faq-title">
                    <a
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#faqfour"
                      aria-expanded="false"
                    >
                      4. When will the project be completed?
                    </a>
                  </h4>
                  <div id="faqfour" className="card-collapse collapse">
                    <div className="faq-info">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="faq-card"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h4 className="faq-title">
                    <a
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#faqfive"
                      aria-expanded="false"
                    >
                      5.What are the steps to rent a house?
                    </a>
                  </h4>
                  <div id="faqfive" className="card-collapse collapse">
                    <div className="faq-info">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="agent-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div
                  className="section-heading"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h2>Become a Real Estate Agent</h2>
                  <div className="sec-line">
                    <span className="sec-line1"></span>
                    <span className="sec-line2"></span>
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="register-btn"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <a href="register.html" className="btn-primary">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-imgs">
            <img
              src="assets/img/icons/blue-circle.svg"
              className="bg-06"
              alt="icon"
            />
            <img
              src="assets/img/icons/red-circle.svg"
              className="bg-07"
              alt="icon"
            />
          </div>
        </section>

        <section className="latest-blog-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="section-heading text-center">
                  <h2>Latest Blog</h2>
                  <div className="sec-line">
                    <span className="sec-line1"></span>
                    <span className="sec-line2"></span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmodtempor incididunt
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel className="blog-slider" {...options6}>
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Property</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <a href="blog-details.html">
                            How to achieve financial independence
                          </a>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </a>
                          <div className="user-name">
                            <h6>
                              <a href="javascript:void(0);">Doe John</a>
                            </h6>
                            <p>Posted on : 15 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Advantages</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <a href="blog-details.html">
                            The most popular cities for homebuyers
                          </a>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </a>
                          <div className="user-name">
                            <h6>
                              <a href="javascript:void(0);">John</a>
                            </h6>
                            <p>Posted on : 15 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-3.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Finanace</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <a href="blog-details.html">
                            Learn how real estate really shapes our future
                          </a>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/profiles/avatar-05.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </a>
                          <div className="user-name">
                            <h6>
                              <a href="javascript:void(0);">Eric Krok</a>
                            </h6>
                            <p>Posted on : 15 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Property</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <a href="blog-details.html">
                            The most popular cities for homebuyers
                          </a>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/profiles/avatar-07.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </a>
                          <div className="user-name">
                            <h6>
                              <a href="javascript:void(0);">Francis</a>
                            </h6>
                            <p>Posted on : 12 May 2023</p>
                          </div>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Property</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <a href="blog-details.html">
                            How to achieve financial independence
                          </a>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </a>
                          <div className="user-name">
                            <h6>
                              <a href="javascript:void(0);">Rafael</a>
                            </h6>
                            <p>Posted on : 13 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            <span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        <section className="news-letter-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div
                  className="news-heading"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h2>Sign Up for Our Newsletter</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe
                    ndisse suscipit sagittis
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="email-form"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button className="btn-primary">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                          <img
                            src="assets/img/google-pay.png"
                            alt="google play"
                          />
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
                    <a href="rent-property-grid.html">
                      Stephen Alexander Homes
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-wrap active-progress">
        <svg className="progress-circle svg-content" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
    </>
  );
}

export default App;
