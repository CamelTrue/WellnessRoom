import { LoadingProvider, useLoading } from './context/LoadingContext';
import ScrollToTopButton from './components/ScrollToTopButton';
import CursorFollower from './components/CursorFollower';
import { preloadImages } from './utils/preloadImages';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useEffect } from 'react';
import './App.scss'; 

function App() {
    return (
        <LoadingProvider>
            <LoadingConsumerApp /> 
        </LoadingProvider>
    );
}

function LoadingConsumerApp() {
    const { isLoaded, loadingProgress, updateProgress } = useLoading();
    console.log("Loading progress:", loadingProgress, "Is loaded:", isLoaded);

    useEffect(() => {
        const imagesToPreload = [
            '/media/Header-main.webp',
            '/media/wave2.svg', 
        ];

        preloadImages(imagesToPreload).then(() => {
            updateProgress(100);
        });
    }, [updateProgress]);

    if (!isLoaded) {
        console.log("Rendering progress bar with progress:", loadingProgress);
        return <ProgressBar progress={loadingProgress} />;
    }

    return (
        <div>
            <CursorFollower />
            <Navbar />
            <Hero />
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default App;
