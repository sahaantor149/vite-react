import CountUp from "react-countup";

function Counter() {
  return (
    <section className="counter-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div
              className="counter-box flex-fill"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="counter-icon">
                <img src="assets/img/icons/counter-icon-1.svg" alt="icon" />
              </div>
              <div className="counter-value">
                <h3 className="dash-count">
                  <CountUp end={50} />K
                </h3>
                <h5>Listings Added</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div
              className="counter-box flex-fill"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="counter-icon">
                <img src="assets/img/icons/counter-icon-2.svg" alt="icon" />
              </div>
              <div className="counter-value">
                <h3 className="dash-count">
                  <CountUp end={3000} />+
                </h3>
                <h5>Agents Listed</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div
              className="counter-box flex-fill"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="counter-icon">
                <img src="assets/img/icons/counter-icon-3.svg" alt="icon" />
              </div>
              <div className="counter-value">
                <h3 className="dash-count">
                  <CountUp end={2000} />+
                </h3>
                <h5>Sales Completed</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div
              className="counter-box flex-fill"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="counter-icon">
                <img src="assets/img/icons/counter-icon-4.svg" alt="icon" />
              </div>
              <div className="counter-value">
                <h3 className="dash-count">
                  <CountUp end={5000} />+
                </h3>
                <h5>Users</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
