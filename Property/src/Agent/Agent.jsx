function Agent() {
  return (
    <section className="agent-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div
              className="section-heading"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h2>Become a Real Estate Agent</h2>
              <div className="sec-line">
                <span className="sec-line1"></span>
                <span className="sec-line2"></span>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="register-btn"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <a href="register.html" className="btn-primary">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-imgs">
        <img
          src="assets/img/icons/blue-circle.svg"
          className="bg-06"
          alt="icon"
        />
        <img
          src="assets/img/icons/red-circle.svg"
          className="bg-07"
          alt="icon"
        />
      </div>
    </section>
  );
}

export default Agent;
