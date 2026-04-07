class ImagePreloader {
    constructor() {
        this.images = [];
        this.loadedCount = 0;
        this.totalCount = 0;
    }

    preload(imagePaths, callback) {
        this.totalCount = imagePaths.length;
        this.loadedCount = 0;

        if (this.totalCount === 0) {
            callback && callback();
            return;
        }

        imagePaths.forEach(path => {
            const img = new Image();
            img.onload = () => {
                this.loadedCount++;
                if (this.loadedCount === this.totalCount) {
                    callback && callback();
                }
            };
            img.onerror = () => {
                this.loadedCount++;
                if (this.loadedCount === this.totalCount) {
                    callback && callback();
                }
            };
            img.src = path;
            this.images.push(img);
        });
    }

    preloadFromElements(selector, callback) {
        const elements = document.querySelectorAll(selector);
        const imagePaths = Array.from(elements).map(el => {
            return el.src || el.dataset.src || el.style.backgroundImage?.match(/url\(['"]?([^'"]+)['"]?\)/)?.[1];
        }).filter(Boolean);

        this.preload(imagePaths, callback);
    }
}

// Auto-preload common images on page load
document.addEventListener('DOMContentLoaded', () => {
    const preloader = new ImagePreloader();
    
    // Preload all images with data-preload attribute
    preloader.preloadFromElements('[data-preload]');
    
    // Preload team member images
    preloader.preloadFromElements('.team-member img');
    
    // Preload company logos
    preloader.preloadFromElements('.company-logo');
});