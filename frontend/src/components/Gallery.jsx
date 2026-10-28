import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { galleryAPI } from '../services/api';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const galleryRef = useRef(null);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    if (galleryItems.length > 0) {
      setupScrollAnimation();
    }
  }, [galleryItems]);

  const setupScrollAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.gallery-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  };

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const fetchGalleryItems = async () => {
    try {
      const response = await galleryAPI.getAll();
      setGalleryItems(response.data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      // Fallback to static data if API fails
      setGalleryItems([
        { title: 'ROBOTICS ARENA', description: 'Students practicing on competition-grade robotics arenas with real challenges.', category: 'TRAINING' },
        { title: 'TEAM WORK', description: 'Collaborative problem-solving and team building during robotics training sessions.', category: 'TEAM ACTIVITIES' },
        { title: 'TEST & OPTIMIZE', description: 'Systematic testing and optimization of robots for competition performance.', category: 'ROBOT TESTING' },
      ]);
    }
  };

  return (
    <section className="gallery" id="gallery" style={{ 
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="gallery-top" style={{ textAlign: 'left' }}>
          <div>
            <h2 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-4xl)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'clamp(16px, 2.5vw, 24px)'
            }}>See the Teams in Action.</h2>
            <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>Training, robot building, testing and competition stories from the academy ecosystem.</p>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={scrollLeft}
            style={{
              flex: '0 0 auto',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#0096B9',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 150, 185, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#007A9E'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0096B9'}
          >
            ←
          </button>

          <div
            ref={galleryRef}
            className="gallery-grid"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: 'clamp(16px, 3vw, 24px)',
              paddingBottom: '20px',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              flex: 1,
              paddingLeft: '30px'
            }}
          >
            {galleryItems.map((item, index) => (
              <div className={`gallery-card ${visibleCards.has(index) ? 'visible' : ''}`} key={index} data-index={index} style={{
                flex: '0 0 auto',
                minWidth: '300px',
                maxWidth: '400px'
              }}>
                <div className="gallery-thumb">
                  <span className="tag">GRA / 0{index + 1}</span>
                </div>
                <div className="gallery-body">
                  <h4 style={{
                    color: '#12181c',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    marginBottom: '8px'
                  }}>{item.title}</h4>
                  <p style={{
                    color: '#5a6067',
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: '1.5'
                  }}>{item.description}</p>
                  <span className="cat">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            style={{
              flex: '0 0 auto',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#0096B9',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 150, 185, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#007A9E'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0096B9'}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;