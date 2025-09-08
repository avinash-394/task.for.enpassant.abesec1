import React, { useState, useCallback } from 'react';

// --- Type Definitions ---
interface GalleryItem {
  id: number;
  alt: string;
  src: string;
}

interface BackgroundImage {
  id: string;
  src: string;
}

interface GalleryCardProps {
  id: number;
  src: string;
  alt: string;
  onError: (id: number) => void;
}


// --- Data (Typed and Static) ---
const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, alt: "ACC", src: "/assets/gallery/1.png" },
  { id: 2, alt: "WCC", src: "/assets/gallery/5.png" },
  { id: 3, alt: "Knightmares", src: "/assets/gallery/3.png" },
  { id: 4, alt: "ShehMaat", src: "/assets/gallery/4.png" },
  { id: 5, alt: "HCC", src: "/assets/gallery/2.png" },
  { id: 6, alt: "CheckUsOut", src: "/assets/gallery/6.png" },
  { id: 7, alt: "Invalid Image", src: "/path/to/broken-image.png" },
];



// --- Memoized Child Component: GalleryCard (Typed) ---
const GalleryCard = React.memo<GalleryCardProps>(({ id, src, alt, onError }) => {
  const handleImageError = useCallback(() => {
    onError(id);
  }, [id, onError]);

  return (
    <div className="gallery-card">
      <div className="gallery-image-container">
        <img
          src={src}
          alt={alt}
          className="gallery-image"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <p className="gallery-caption">{alt}</p>
    </div>
  );
});
GalleryCard.displayName = 'GalleryCard'; // For better debugging in React DevTools


// --- Main Gallery Component ---
const Gallery = () => {
  // State is now correctly typed
  const [failedImageIds, setFailedImageIds] = useState(new Set<number>());

  // The function passed to children is stable and typed
  const handleImageError = useCallback((id: number) => {
    setFailedImageIds(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  }, []);

  const visibleGalleryItems = GALLERY_ITEMS.filter(item => !failedImageIds.has(item.id));

  if (visibleGalleryItems.length === 0) {
    return (
      <section className="gallery-container">
        <div className="main-content-container">
            <h1 className="gallery-title">Chess Gallery</h1>
            <p className="gallery-empty-message">No images in the gallery yet. Check back later!</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{`
        /*
         * ===============================================
         * High-Performance Gallery Styles
         * Animations and expensive effects are removed or reduced.
         * ===============================================
         */

        .gallery-container {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 5rem 1.5rem;
          background: var(--background-gradient, hsl(var(--background)));
        }

        /* --- OPTIMIZATION: Removed expensive background effects --- */
        /* The background collage is removed to save rendering resources. 
           If you want to keep it, consider removing the blur filter entirely. */
        .background-collage {
          display: none; 
        }

        /* --- Main Content Container --- */
        .main-content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem;
          color: hsl(var(--foreground));
          position: relative;
          z-index: 1;
          /* --- OPTIMIZATION: backdrop-filter is removed. --- */
          /* It's one of the most expensive CSS properties. A solid color is much faster. */
          background-color: hsla(var(--card), 0.95); /* Made more opaque */
          border-radius: var(--radius);
          border: 1px solid hsl(var(--border));
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        /* --- Title Styles (Unchanged) --- */
        .gallery-title {
          text-align: center;
          margin-bottom: 3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 3.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: hsl(var(--foreground));
          border-bottom: 3px solid hsl(var(--primary));
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        
        .title-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        /* --- Gallery Grid (Unchanged) --- */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        /* --- OPTIMIZATION: Simplified Card Styles --- */
        .gallery-card {
          background-color: hsl(var(--card));
          color: hsl(var(--card-foreground));
          border-radius: var(--radius);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          border: 1px solid hsl(var(--border));
          overflow: hidden;
          display: flex;
          flex-direction: column;
          /* --- OPTIMIZATION: Only transition the transform property. --- */
          /* Animating box-shadow and background-color causes repaints and is slow. */
          transition: transform 0.3s ease;
          will-change: transform; /* Keep will-change for the property we are animating */
        }

        .gallery-card:hover {
          transform: translateY(-8px);
          /* --- OPTIMIZATION: Simplified hover effect. --- */
          /* A simple border change is much cheaper than animating a large box-shadow. */
          border-color: hsl(var(--primary));
        }

        .gallery-image-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background-color: hsl(var(--background));
        }
        
        .gallery-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
          /* --- OPTIMIZATION: Removed the transform on the image itself. --- */
          /* The card transform provides enough feedback. */
        }
        
        .gallery-caption {
          text-align: center;
          padding: 1.25rem 1rem;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: hsl(var(--muted-foreground));
          border-top: 1px solid hsl(var(--border));
          margin-top: auto;
          background-color: hsl(var(--card));
        }
        .gallery-empty-message {
            text-align: center;
            font-size: 1.2rem;
            color: hsl(var(--muted-foreground));
        }
      `}</style>
      
      <section className="gallery-container">
        
        
        <div className="main-content-container">
          <div className="title-wrapper">
            <h1 className="gallery-title">Our Events</h1>
          </div>
          <div className="gallery-grid">
            {visibleGalleryItems.map((item) => (
              <GalleryCard
                key={item.id}
                id={item.id}
                alt={item.alt}
                src={item.src}
                onError={handleImageError}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
