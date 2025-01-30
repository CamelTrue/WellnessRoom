export const preloadImages = (imageUrls, onProgress) => {
    let loaded = 0;
    const total = imageUrls.length;
    return Promise.all(
        imageUrls.map(src =>
            new Promise(resolve => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    loaded += 1;
                    onProgress?.(loaded, total); 
                    resolve();
                };
                img.onerror = () => {
                    loaded += 1;
                    onProgress?.(loaded, total);
                    resolve();
                };
            })
        )
    );
};
  