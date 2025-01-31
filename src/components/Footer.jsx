import React from 'react'
import './styles/components/footer.scss';

const Footer = () => {
    return (
        <footer className="row footer d-flex align-items-end">
            <div className="col-12">
                <div className="row footer-container ">
                    <div className="col-12 col-sm-5">
                        <div className="row">
                        </div>
                    </div>
                    <div className="mt-4 ms-auto">
                        <div className="row footer-socials">
                            <h3 className="footer-title">Social</h3>
                            <div className="d-flex align-items-center custom-margin-icon-footer">
                                <a href="#"><i className="fa-brands fa-facebook-f m-2 footer-icon-social"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram m-2 footer-icon-social"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter m-2 footer-icon-social"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin m-2 footer-icon-social"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer