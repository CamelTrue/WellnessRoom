import './App.css';
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
      <ScrollToTopButton />

    </div>
  );
}

export default App;
