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
function Property() {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed
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
                  <img src="assets/img/icons/property-icon-1.svg" alt="icon" />
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
                  <img src="assets/img/icons/property-icon-2.svg" alt="icon" />
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
                  <img src="assets/img/icons/property-icon-3.svg" alt="icon" />
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
                  <img src="assets/img/icons/property-icon-4.svg" alt="icon" />
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
                  <img src="assets/img/icons/property-icon-3.svg" alt="icon" />
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
                  <img src="assets/img/icons/property-icon-1.svg" alt="icon" />
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
                  <img src="assets/img/icons/property-icon-4.svg" alt="icon" />
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
  );
}

export default Property;
