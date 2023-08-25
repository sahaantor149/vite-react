function Howit() {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed sollicitudin. Donec non odio…
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed sollicitudin. Donec non odio…
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed sollicitudin. Donec non odio…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howit;
