import OwlCarousel from "react-owl-carousel";
const options = {
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

function Blog() {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmodtempor incididunt
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="blog-slider" {...options}>
              <div
                className="blog-card"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-1.jpg" alt="Blog Image" />
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
                    <img src="assets/img/blog/blog-2.jpg" alt="Blog Image" />
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
                    <img src="assets/img/blog/blog-3.jpg" alt="Blog Image" />
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
                    <img src="assets/img/blog/blog-2.jpg" alt="Blog Image" />
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
                    <img src="assets/img/blog/blog-1.jpg" alt="Blog Image" />
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
  );
}

export default Blog;
