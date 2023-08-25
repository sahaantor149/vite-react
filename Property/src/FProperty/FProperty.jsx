import OwlCarousel from "react-owl-carousel";
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
function FProperty() {
  return (
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
            <OwlCarousel className="feature-slider" {...options}>
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
                        <i className="feather-map-pin"></i> 318-S Oakley Blvd,
                        Chicago, IL 60612, USA
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <i className="feather-map-pin"></i> 470 Park Ave S, New
                        York, NY 10016
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <i className="feather-map-pin"></i> 82-25 Parsons Blvd,
                        Jamaica, NY 11432, USA
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <i className="feather-map-pin"></i> 518-520 8th Ave, New
                        York, NY 10018, USA
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <i className="feather-map-pin"></i> 470 Park Ave S, New
                        York, NY 10016
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <a href="rent-details.html">Stephen Alexander Homes</a>
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <i className="feather-map-pin"></i> 518-520 8th Ave, New
                        York, NY 10018, USA
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
                          <a href="rent-details.html" className="btn-primary">
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
                        <a href="rent-details.html">Place perfect for nature</a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i> 318-S Oakley Blvd,
                        Chicago, IL 60612, USA
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
                          <a href="rent-details.html" className="btn-primary">
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
        <img src="assets/img/bg/price-bg.png" className="bg-04" alt="Image" />
      </div>
    </section>
  );
}

export default FProperty;
