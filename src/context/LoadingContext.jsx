import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const updateProgress = (progress) => {
        console.log(`Progress updated to: ${progress}`);
        setLoadingProgress(progress);
        if (progress >= 100) {
            setIsLoaded(true);
            console.log("Loading complete!");
        }
    };
    

    return (
        <LoadingContext.Provider value={{ loadingProgress, isLoaded, updateProgress }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
