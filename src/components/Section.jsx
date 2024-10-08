import React from 'react'

const Section = () => {
  return (
    <>
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
    </>
  )
}

export default Section