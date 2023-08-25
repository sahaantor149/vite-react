function Price() {
  return (
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
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
        <img src="assets/img/bg/price-bg.png" className="bg-05" alt="icon" />
      </div>
    </section>
  );
}

export default Price;
