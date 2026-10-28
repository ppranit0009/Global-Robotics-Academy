import React from 'react';

const PartnerBand = () => {
  const competitions = [
    {
      title: 'School Robotics Championships',
      description: 'Competition preparation pathway for students and teams.',
      image: '/P 1.jpeg'
    },
    {
      title: 'IRC League',
      description: 'Competition preparation pathway for students and teams.',
      image: '/P 2.jpeg'
    },
    {
      title: 'Smart India Hackathon – Hardware Edition',
      description: 'Competition preparation pathway for students and teams.',
      image: '/P 3.jpeg'
    },
    {
      title: 'ABU Robocon India',
      description: 'Competition preparation pathway for students and teams.',
      image: '/P 4.jpeg'
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const doubledCompetitions = [...competitions, ...competitions];

  return (
    <section className="partner-band" id="partners" style={{ backgroundColor: '#E3F2FD' }}>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scroll-container {
            animation: scroll 20s linear infinite;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="wrap" style={{ padding: 'clamp(30px, 5vw, 60px) clamp(16px, 2.5vw, 20px)' }}>
        <div style={{ textAlign: 'left', marginBottom: 'clamp(30px, 5vw, 50px)' }}>
          <h2 style={{ 
            color: '#12181c',
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 2.5vw, 24px)'
          }}>Build a Competition-Ready<br/><span className="teal" style={{ color: '#0096B9' }}>Robotics Culture.</span></h2>
          <a className="btn" href="#contact" style={{ backgroundColor: '#0096B9', color: '#FFFFFF', display: 'inline-block', marginTop: 'clamp(16px, 2.5vw, 20px)' }}>Partner With Us ↗</a>
        </div>
        
        <div style={{ 
          overflow: 'hidden',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="scroll-container" style={{ 
            display: 'flex', 
            gap: 'clamp(15px, 3vw, 30px)',
            width: 'fit-content'
          }}>
            {doubledCompetitions.map((competition, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'clamp(8px, 1.5vw, 16px)',
                  padding: 'clamp(12px, 2vw, 20px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  flex: '0 0 auto',
                  minWidth: '280px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '100%',
                  height: 'clamp(150px, 25vh, 220px)',
                  borderRadius: 'clamp(8px, 1.5vw, 12px)',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5'
                }}>
                  <img 
                    src={competition.image}
                    alt={competition.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBand;