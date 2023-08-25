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

function Testimonial() {
  return (
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
            <OwlCarousel className="testimonial-slider" {...options}>
              <div
                className="testimonial-card"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <div className="user-icon">
                  <a href="javascript:void(0);">
                    <img src="assets/img/profiles/avatar-01.jpg" alt="User" />
                  </a>
                </div>
                <p>
                  Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                  beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                  nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                  et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                  Sed fuga est harum quo nesciunt sint. Optio veniam...
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
                    <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                  </a>
                </div>
                <p>
                  Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                  beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                  nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                  et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                  Sed fuga est harum quo nesciunt sint. Optio veniam...
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
                    <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                  </a>
                </div>
                <p>
                  Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                  beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                  nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                  et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                  Sed fuga est harum quo nesciunt sint. Optio veniam...
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
                    <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                  </a>
                </div>
                <p>
                  Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                  beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                  nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                  et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                  Sed fuga est harum quo nesciunt sint. Optio veniam...
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
                    <img src="assets/img/profiles/avatar-05.jpg" alt="User" />
                  </a>
                </div>
                <p>
                  Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                  beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                  nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                  et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                  Sed fuga est harum quo nesciunt sint. Optio veniam...
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
  );
}

export default Testimonial;
