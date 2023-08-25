function Faq() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="faq-img">
              <img src="assets/img/faq-img.jpg" alt="icon" />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="section-heading"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h2>Frequently Asked Questions</h2>
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
            <div
              className="faq-card"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h4 className="faq-title">
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqone"
                  aria-expanded="false"
                >
                  1. What are the costs to buy a house?
                </a>
              </h4>
              <div id="faqone" className="card-collapse collapse">
                <div className="faq-info">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div
              className="faq-card"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h4 className="faq-title">
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqtwo"
                  aria-expanded="false"
                >
                  2. What are the steps to sell a house?
                </a>
              </h4>
              <div id="faqtwo" className="card-collapse collapse">
                <div className="faq-info">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div
              className="faq-card"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h4 className="faq-title">
                <a
                  className
                  data-bs-toggle="collapse"
                  href="#faqthree"
                  aria-expanded="false"
                >
                  3. Do you have loan consultants?
                </a>
              </h4>
              <div id="faqthree" className="card-collapse collapse show">
                <div className="faq-info">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div
              className="faq-card"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h4 className="faq-title">
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqfour"
                  aria-expanded="false"
                >
                  4. When will the project be completed?
                </a>
              </h4>
              <div id="faqfour" className="card-collapse collapse">
                <div className="faq-info">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            <div
              className="faq-card"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h4 className="faq-title">
                <a
                  className="collapsed"
                  data-bs-toggle="collapse"
                  href="#faqfive"
                  aria-expanded="false"
                >
                  5.What are the steps to rent a house?
                </a>
              </h4>
              <div id="faqfive" className="card-collapse collapse">
                <div className="faq-info">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
