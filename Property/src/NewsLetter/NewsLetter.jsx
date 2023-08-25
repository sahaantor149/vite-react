function NewsLetter() {
  return (
    <section className="news-letter-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div
              className="news-heading"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h2>Sign Up for Our Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
                suscipit sagittis
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="email-form"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <form action="#">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <button className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
