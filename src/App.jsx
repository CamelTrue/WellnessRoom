import './App.css';

function App() {
  return (
    <div>
      <header className="container-fluid mb-4">
        <div className="row">
          <div className="col12 header">
            <div className="row position-relative">
              <div className="col-12 waves">
                <div className="row">
                  <div className="col-5 titles">
                    <h1>Lorem Ipsum</h1>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <h2>Animi voluptates nulla ratione veritatis, amet deserunt.</h2>
                    <button className="btn-custom bg-warning">MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Card Section */}
        <section className="container-fluid pt-5 card-section">
          <div className="row">
            <div className="col-12">
              <div className="row d-flex flex-column align-items-center text-center mb-5">
                <div className="col-3">
                  <h2 className="card-section-title">Lorem ipsum dolor sit</h2>
                </div>
                <div className="col-6">
                  <h3 className="card-section-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quaerat praesentium possimus blanditiis
                    culpa, alias, modi vel laudantium dignissimos quo consectetur? Ipsum cum, quisquam reiciendis tempore
                    asperiores cupiditate vero!
                  </h3>
                </div>
              </div>

              <div className="row pt-5 text-white">
                {/* CARD-1 */}
                <article className="col-12 col-md-6 col-xl-3 card-container">
                  <div className="p-3 card-1">
                    <div className="card-content d-flex flex-column">
                      <div className="card-icon pb-4">
                        <i className="fa-regular fa-user fa-2x"></i>
                      </div>
                      <div className="card-title border-bottom border-3 border-warning">
                        <h2>Lorem</h2>
                      </div>
                      <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit
                        repudiandae id deleniti! Error harum maiores velit quos minus.
                      </div>
                    </div>
                  </div>
                </article>

                {/* CARD-2 */}
                <article className="col-12 col-md-6 col-xl-3 card-container">
                  <div className="p-3 card-1">
                    <div className="card-content d-flex flex-column">
                      <div className="card-icon pb-4">
                        <i className="fa-solid fa-location-dot fa-2x"></i>
                      </div>
                      <div className="card-title border-bottom border-3 border-warning">
                        <h2>Lorem</h2>
                      </div>
                      <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit
                        repudiandae id deleniti! Error harum maiores velit quos minus.
                      </div>
                    </div>
                  </div>
                </article>

                {/* CARD-3 */}
                <article className="col-12 col-md-6 col-xl-3 card-container">
                  <div className="p-3 card-1">
                    <div className="card-content d-flex flex-column">
                      <div className="card-icon pb-4">
                        <i className="fa-regular fa-life-ring fa-2x"></i>
                      </div>
                      <div className="card-title border-bottom border-3 border-warning">
                        <h2>Lorem</h2>
                      </div>
                      <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit
                        repudiandae id deleniti! Error harum maiores velit quos minus.
                      </div>
                    </div>
                  </div>
                </article>

                {/* CARD-4 */}
                <article className="col-12 col-md-6 col-xl-3 card-container">
                  <div className="p-3 card-1">
                    <div className="card-content d-flex flex-column">
                      <div className="card-icon pb-4">
                        <i className="fa-solid fa-route fa-2x"></i>
                      </div>
                      <div className="card-title border-bottom border-3 border-warning">
                        <h2>Lorem</h2>
                      </div>
                      <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam sint quo unde! Suscipit
                        repudiandae id deleniti! Error harum maiores velit quos minus.
                      </div>
                    </div>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid pt-5 icons-section">
            <div className="row">
                
                <article className="col-12 col-lg-5">
                    <div className="infocard d-flex flex-column justify-content-center">
                        <h3 className="infocard-title">
                            Lorem ipsum
                        </h3>
                        <p className="infocard-text p-0 m-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolores illo nemo rem quasi? Eos voluptate sed cumque sapiente molestiae necessitatibus.
                            Eos voluptate sed cumque sapiente molestiae necessitatibus.
                        </p>
                    </div>
                </article>
                <aside className="col-12 col-lg-5 infocard-icons-container d-flex flex-column justify-content-between">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure className="infocard-icon m-0">
                                <i className="fa-solid fa-fire fa-3x text-danger"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure className="infocard-icon m-0">
                                <i className="fa-solid fa-seedling fa-3x text-success"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure className="infocard-icon m-0">
                                <i className="fa-regular fa-bell fa-3x text-warning"></i>
                            </figure>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure className="infocard-icon m-0">
                                <i className="fa-solid fa-box-open fa-3x text-primary"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure className="infocard-icon m-0">
                                <i className="fa-solid fa-code-branch fa-3x text-muted"></i>
                            </figure>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                            <figure className="infocard-icon m-0">
                                <i className="fa-solid fa-shield fa-3x text-black"></i>
                            </figure>
                        </div>
                        
                    </div>
                </aside>
            </div>
        </section>

        <section className="widget-wrapper">
            <div className="container-fluid widgets-section d-flex flex-column justify-content-center align-items-center">
                
                <div className="row w-100 d-flex flex-column">
                    
                    <div className="col-12 col-lg-5">
                        <div className="row">
                            
                            <div className="col-12 col-lg-6">
                                <div className="widget">
                                    <div className="widget-icon pb-3">
                                        <i className="fa-solid fa-route fa-3x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            12
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum dolor, sit amet consectetur.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-6">
                                <div className="widget d-flex flex-column">
                                    <div className="widget-icon pb-4">
                                        <i className="fa-solid fa-compass fa-2x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            412
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 pt-4 col-lg-8 d-flex justify-content-end">
                        <div className="row w-100">
                            
                            <div className="col-lg-1 d-none d-md-block">
                                
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="widget">
                                    <div className="widget-icon pb-3">
                                        <i className="fa-solid fa-route fa-3x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            12
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum dolor, sit amet consectetur.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-5">
                                <div className="widget d-flex flex-column">
                                    <div className="widget-icon pb-4">
                                        <i className="fa-solid fa-compass fa-2x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            412
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div >
            
            <div className="container-fluid widgets-section d-flex flex-column justify-content-center align-items-center">
                
                <div className="row w-100 d-flex flex-column align-items-end">
                    
                    <div className="col-12 col-lg-7">
                        <div className="row">
                            
                            <div className="col-12 col-lg-6">
                                <div className="widget">
                                    <div className="widget-icon pb-3">
                                        <i className="fa-solid fa-route fa-3x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            12
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum dolor, sit amet consectetur.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-6">
                                <div className="widget d-flex flex-column">
                                    <div className="widget-icon pb-4">
                                        <i className="fa-solid fa-compass fa-2x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            412
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 pt-4 col-lg-8 d-flex justify-content-end">
                        <div className="row w-100">
                            
                            <div className="col-12 col-lg-5">
                                <div className="widget">
                                    <div className="widget-icon pb-3">
                                        <i className="fa-solid fa-person-hiking fa-3x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            12
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-5">
                                <div className="widget d-flex flex-column">
                                    <div className="widget-icon pb-4">
                                        <i className="fa-solid fa-caravan fa-2x text-primary"></i>
                                    </div>
                                    <div className="widget-title">
                                        <h2>
                                            412
                                        </h2>
                                    </div>
                                    <div className="widget-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, enim! Sit, quam.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-md-block">
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div >
        </section>
        
      </main>

      <footer className="row footer d-flex align-items-end">
        <div className="col-12">
          <div className="row footer-container ">
            <div className="col-5">
              <div className="row">
                <h3 className="footer-title text-warning">Lorem Ipsum dolor</h3>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem quia, dolorum iure similique
                  suscipit temporibus praesentium quos mollitia nisi ipsam, quas alias vitae rerum, accusantium officia.
                  Nesciunt, reiciendis deleniti!
                </p>
              </div>
            </div>
            <div className="col-5 ps-5 ms-auto">
              <div className="row footer-socials">
                <h3 className="footer-title text-warning">Social</h3>
                <div className="col-12 d-flex align-items-center justify-content-between pt-4">
                  <a href="#"><i className="fa-brands fa-facebook-f fa-xl"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram fa-xl"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter fa-xl"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin fa-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
