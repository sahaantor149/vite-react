import OwlCarousel from "react-owl-carousel";
const options = {
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
function Cities() {
  return (
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
            <OwlCarousel className="city-card-slider" {...options}>
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
  );
}

export default Cities;
