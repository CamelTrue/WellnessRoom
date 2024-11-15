import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <footer className="row footer d-flex align-items-end">
        <div className="col-12">
          <div className="row footer-container ">
            <div className="col-12 col-sm-5">
              <div className="row">
                <h3 className="footer-title">Lorem Ipsum dolor</h3>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem quia, dolorum iure similique
                  suscipit temporibus praesentium quos mollitia nisi ipsam, quas alias vitae rerum, accusantium officia.
                  Nesciunt, reiciendis deleniti!
                </p>
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
