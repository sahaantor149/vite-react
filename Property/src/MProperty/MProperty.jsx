import OwlCarousel from "react-owl-carousel";
const options = {
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

function MProperty() {
  return (
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
                  <a href="buy-property-grid.html" className="arrow buy-arrow">
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
                    <a href="rent-property-gridhtml.html">Sell a Property</a>
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
            <img src="assets/img/bg/prop-bg.png" className="bg-10" alt="icon" />
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
              Every day, we build trust through communication, transparency, and
              results.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel className="partners-slider" {...options}>
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
  );
}

export default MProperty;
