export const preloadImages = (imageUrls) => {
    return Promise.all(
        imageUrls.map(
            (src) =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        console.log(`Immagine caricata: ${src}`);
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Errore nel caricamento dell'immagine: ${src}`);
                        resolve();
                    };
                })

        )
    );
};
