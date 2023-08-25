function Banner() {
  return (
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
                Properties for buy / rent in in your location. We have more than
                3000+ listings for you to choose
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
                      <img src="assets/img/icons/rent-icon.svg" alt="icon" />
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
                            placeholder="Enter "
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
  );
}

export default Banner;
