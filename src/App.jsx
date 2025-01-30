import { LoadingProvider, useLoading } from './context/LoadingContext';
import ScrollToTopButton from './components/ScrollToTopButton';
import CursorFollower from './components/CursorFollower';
import { preloadImages } from './utils/preloadImages';
import ProgressBar from './components/ProgressBar';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
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

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const imagesToPreload = [
      '/media/Header-main.webp',
      '/media/wave1.svg',
      '/media/wave2.svg',
      'media/1.webp', 
      'media/2.webp', 
      'media/3.webp', 
      'media/4.webp', 
      'media/5.webp', 
      'media/6.webp',
      'media/change-logo.png',
      'media/footer.jpg',
      'media/Lorenzo.webp',
      'media/Marta.webp',
      'media/Radha.webp'
    ];

    const updateLoadingProgress = (loaded, total) => {
      const progress = Math.round((loaded / total) * 100);
      updateProgress(progress);
    };

    preloadImages(imagesToPreload, updateLoadingProgress).then(() => {
      updateProgress(100);
    });
  }, [updateProgress]);

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  return (
    <div>
      {showLoader && (
        <ProgressBar
          progress={loadingProgress}
          onFinish={handleLoaderFinish}
        />
      )}
        <CursorFollower />
        <Navbar />
        <Hero />
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}

export default App;
