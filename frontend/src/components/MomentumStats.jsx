import React from 'react';
import StatsSlideshow from './StatsSlideshow';

const MomentumStats = () => {
  return (
    <section 
      className="momentum-stats-section" 
      id="momentum"
      style={{
        backgroundColor: '#E3F2FD',
        padding: 'clamp(30px, 5vw, 60px) 0',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(0, 150, 185, 0.05)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(0, 150, 185, 0.05)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 150, 185, 0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }} />
      
      <div className="wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="content-wrapper" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.5fr', 
          gap: 'clamp(30px, 5vw, 60px)',
          alignItems: 'stretch',
          minHeight: 'auto',
          maxHeight: 'calc(100vh - clamp(100px, 15vw, 160px))'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="momentum-header" style={{ marginBottom: 'clamp(30px, 5vw, 50px)' }}>
              <h2 style={{ 
                color: '#12181c', 
                fontSize: 'var(--font-size-4xl)', 
                fontWeight: '800', 
                margin: '0', 
                lineHeight: '1.1',
                textTransform: 'uppercase',
                letterSpacing: '0.02em'
              }}>WHERE STUDENTS<br/>BECOME COMPETITORS.</h2>
            </div>
            
            <div className="stats-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              <div className="stat-item" style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 20px)',
                background: '#ffffff',
                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                gap: 'clamp(12px, 2vw, 20px)'
              }}>
                <div className="stat-number" style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: '800', 
                  color: '#0096B9', 
                  lineHeight: '1',
                  minWidth: 'clamp(50px, 8vw, 80px)',
                  textAlign: 'left'
                }}>5,000+</div>
                <div style={{ 
                  width: '1px', 
                  height: '30px', 
                  background: '#E3E1DA',
                  flexShrink: 0
                }} />
                <div className="stat-label" style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: '#5a6067', 
                  fontWeight: '600', 
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  flex: 1
                }}>Students Trained</div>
              </div>
              
              <div className="stat-item" style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 20px)',
                background: '#ffffff',
                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                gap: 'clamp(12px, 2vw, 20px)'
              }}>
                <div className="stat-number" style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: '800', 
                  color: '#0096B9', 
                  lineHeight: '1',
                  minWidth: 'clamp(50px, 8vw, 80px)',
                  textAlign: 'left'
                }}>20+</div>
                <div style={{ 
                  width: '1px', 
                  height: '30px', 
                  background: '#E3E1DA',
                  flexShrink: 0
                }} />
                <div className="stat-label" style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: '#5a6067', 
                  fontWeight: '600', 
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  flex: 1
                }}>Robotics Teams Associated</div>
              </div>
              
              <div className="stat-item" style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 20px)',
                background: '#ffffff',
                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                gap: 'clamp(12px, 2vw, 20px)'
              }}>
                <div className="stat-number" style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: '800', 
                  color: '#0096B9', 
                  lineHeight: '1',
                  minWidth: 'clamp(50px, 8vw, 80px)',
                  textAlign: 'left'
                }}>11+</div>
                <div style={{ 
                  width: '1px', 
                  height: '30px', 
                  background: '#E3E1DA',
                  flexShrink: 0
                }} />
                <div className="stat-label" style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: '#5a6067', 
                  fontWeight: '600', 
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  flex: 1
                }}>Schools & Organisations</div>
              </div>
              
              <div className="stat-item" style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 20px)',
                background: '#ffffff',
                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                gap: 'clamp(12px, 2vw, 20px)'
              }}>
                <div className="stat-number" style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: '800', 
                  color: '#0096B9', 
                  lineHeight: '1',
                  minWidth: 'clamp(50px, 8vw, 80px)',
                  textAlign: 'left'
                }}>100+</div>
                <div style={{ 
                  width: '1px', 
                  height: '30px', 
                  background: '#E3E1DA',
                  flexShrink: 0
                }} />
                <div className="stat-label" style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: '#5a6067', 
                  fontWeight: '600', 
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  flex: 1
                }}>Competition Participations</div>
              </div>
              
              <div className="stat-item" style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(12px, 2vw, 18px) clamp(14px, 2.5vw, 20px)',
                background: '#ffffff',
                borderRadius: 'clamp(8px, 1.5vw, 12px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                gap: 'clamp(12px, 2vw, 20px)'
              }}>
                <div className="stat-number" style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  fontWeight: '800', 
                  color: '#0096B9', 
                  lineHeight: '1',
                  minWidth: 'clamp(50px, 8vw, 80px)',
                  textAlign: 'left'
                }}>4+</div>
                <div style={{ 
                  width: '1px', 
                  height: '30px', 
                  background: '#E3E1DA',
                  flexShrink: 0
                }} />
                <div className="stat-label" style={{ 
                  fontSize: 'var(--font-size-xs)', 
                  color: '#5a6067', 
                  fontWeight: '600', 
                  lineHeight: '1.3',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  flex: 1
                }}>Industry Partners</div>
              </div>
            </div>
          </div>

          <div className="slideshow-wrapper" style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'stretch',
            position: 'relative',
            height: '100%',
            marginTop: 'clamp(20px, 4vw, 40px)'
          }}>
            <div className="hero-card" style={{ 
              width: '100%', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <StatsSlideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
