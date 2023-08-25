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
function Feature() {
  return (
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
            <OwlCarousel className="feature-slider" {...options}>
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
                        <a href="rent-details.html">Place perfect for nature</a>
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
                          <span className="category-value date">Apartment</span>
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
                        <i className="feather-map-pin"></i>470 Park Ave S, New
                        York, NY 10016
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
                          <span className="category-value date">Condos</span>
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
                        <i className="feather-map-pin"></i>82-25 Parsons Blvd,
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
                        <i className="feather-map-pin"></i>518-520 8th Ave, New
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
                        <a href="rent-details.html">Two storey modern flat</a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>470 Park Ave S, New
                        York, NY 10016
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
                          <span className="category-value date">Apartment</span>
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
                        <span className="rating-review">5.0 (60 Reviews)</span>
                      </div>
                      <h3 className="title">
                        <a href="rent-details.html">
                          Minimalist and bright flat
                        </a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>518-520 8th Ave, New
                        York, NY 10018, USA
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
                        <span className="rating-review">5.0 (50 Reviews)</span>
                      </div>
                      <h3 className="title">
                        <a href="rent-details.html">Place perfect for nature</a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>318-S Oakley Blvd,
                        Chicago, IL 60612, USA
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
                          <span className="category-value date">Apartment</span>
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
        <img src="assets/img/bg/price-bg.png" className="bg-01" alt="icon" />
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
  );
}

export default Feature;
