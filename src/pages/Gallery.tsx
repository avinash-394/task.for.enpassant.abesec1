import React from 'react';

// Your main gallery items (logos) - No changes needed here
const galleryItems = [
  { id: 1, alt: "ACC", src: "/assets/gallery/1.png" },
  { id: 2, alt: "WCC", src: "/assets/gallery/5.png" },
  { id: 3, alt: "Knightmares", src: "/assets/gallery/1.png" },
  { id: 4, alt: "ShehMaat", src: "/assets/gallery/4.png" },
  { id: 5, alt: "HCC", src: "/assets/gallery/2.png" },
  { id: 6, alt: "CheckUsOut", src: "/assets/gallery/6.png" },
  { id: 7, alt: "Invalid Image", src: "/path/to/broken-image.png" },
];

// Array for background event images - No changes needed here
const backgroundEventImages = [
    { id: 'bg1', src: "/assets/gallery/1.png" },
    { id: 'bg2', src: "/assets/gallery/2.png" },
    { id: 'bg3', src: "/assets/gallery/4.png" },
    { id: 'bg4', src: "/assets/gallery/5.png" },
    { id: 'bg5', src: "/assets/gallery/6.png" },
    { id: 'bg6', src: "/assets/gallery/1.png" },
    { id: 'bg7', src: "/assets/gallery/2.png" },
    { id: 'bg8', src: "/assets/gallery/4.png" },
    { id: 'bg9', src: "/assets/gallery/5.png" },
    { id: 'bg10', src: "/assets/gallery/6.png" },
    { id: 'bg11', src: "/assets/gallery/1.png" },
    { id: 'bg12', src: "/assets/gallery/2.png" },
];

const Gallery = () => {
  const handleImageError = (e) => {
    // Hide the entire card if an image fails to load
    e.currentTarget.closest('.gallery-card').style.display = 'none';
  };

  // The empty state message remains, but we'll style it with the theme
  if (!galleryItems || galleryItems.length === 0) {
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
         * Refactored Gallery Styles
         * Using the "Dark Charcoal & Orange" Theme
         * ===============================================
         */

        .gallery-container {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 5rem 1.5rem; /* Increased padding for better spacing */
          /* Using the background gradient from your theme */
          background: var(--background-gradient, hsl(var(--background)));
        }

        /* --- Modernized Background Collage --- */
        .background-collage {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.5rem;
          /* Filters make the background atmospheric and less distracting */
          filter: blur(10px) grayscale(80%);
          opacity: 0.08;
          transform: scale(1.1);
        }

        .bg-image-item {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
        }

        /* --- Main Content Container --- */
        .main-content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem;
          color: hsl(var(--foreground));
          position: relative;
          z-index: 1;
          /* Themed background and border */
          background-color: hsla(var(--card), 0.8); /* Semi-transparent card color */
          backdrop-filter: blur(12px); /* Glassmorphism effect */
          border-radius: var(--radius);
          border: 1px solid hsl(var(--border));
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        /* --- Modernized Title --- */
        .gallery-title {
          text-align: center;
          margin-bottom: 3rem;
          font-family: 'Montserrat', sans-serif; /* Using theme font */
          font-weight: 800;
          font-size: 3.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: hsl(var(--foreground));
          /* Accent border using the primary orange color */
          border-bottom: 3px solid hsl(var(--primary));
          display: inline-block; /* Allows border to wrap content */
          padding-bottom: 0.5rem;
        }
        
        .title-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        /* --- Responsive Gallery Grid --- */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        /* --- Modernized Gallery Cards --- */
        .gallery-card {
          /* Using .card styles from your theme */
          background-color: hsl(var(--card));
          color: hsl(var(--card-foreground));
          border-radius: var(--radius);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          border: 1px solid hsl(var(--border));
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform, box-shadow;
        }

        .gallery-card:hover {
          transform: translateY(-8px);
          /* Subtle orange glow on hover from your theme */
          box-shadow: 0 12px 30px hsla(var(--primary) / 0.15), 0 0 0 1px hsl(var(--primary));
        }

        .gallery-image-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background-color: hsl(var(--background)); /* Darker background for image contrast */
          transition: background-color 0.3s ease;
        }

        .gallery-card:hover .gallery-image-container {
            background-color: hsl(20, 10%, 12%); /* Slightly lighten on hover */
        }
        
        .gallery-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gallery-card:hover .gallery-image {
          transform: scale(1.1);
        }
        
        .gallery-caption {
          text-align: center;
          padding: 1.25rem 1rem;
          font-family: 'Lato', sans-serif; /* Using theme font */
          font-weight: 700;
          font-size: 1.25rem;
          color: hsl(var(--muted-foreground));
          border-top: 1px solid hsl(var(--border));
          margin-top: auto; /* Pushes caption to the bottom */
          background-color: hsl(var(--card));
        }
      `}</style>
      
      <section className="gallery-container">
        {/* Atmospheric Background Collage */}
        <div className="background-collage" aria-hidden="true">
          {backgroundEventImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt="" // Decorative images
              className="bg-image-item"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              loading="lazy"
            />
          ))}
        </div>

        {/* Main Gallery Content */}
        <div className="main-content-container">
          <div className="title-wrapper">
            <h1 className="gallery-title">Our Clubs</h1>
          </div>
          <div className="gallery-grid">
            {galleryItems.map(({ id, alt, src }) => (
              <div key={id} className="gallery-card">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;