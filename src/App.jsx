import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.scss';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />

            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default App;
