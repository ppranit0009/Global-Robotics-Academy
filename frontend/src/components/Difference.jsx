import React from 'react';

const Difference = () => {

  return (
    <section className="difference" style={{ 
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="wrap diff-grid" style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ 
            color: '#12181c',
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 2.5vw, 24px)'
          }}>Train<br/>With<br/><span className="orange" style={{ color: '#0096B9' }}>Intent.</span></h2>
          <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>Don't just learn robotics. Train to compete.</p>
        </div>
        <div className="diff-cards">
          <div className="diff-card">
            <img src="/technoxian.jpg" alt="TECHNOXIAN" style={{ width: '100%', height: 'auto', borderRadius: '6px', objectFit: 'contain', marginBottom: '12px' }} />
            <p>Real challenges, rules, strategy and performance.</p>
          </div>
          <div className="diff-card">
            <img src="/wro.png" alt="WRO" style={{ width: '100%', height: 'auto', borderRadius: '6px', objectFit: 'contain', marginBottom: '12px' }} />
            <p>Design, assemble, program, test and improve.</p>
          </div>
          <div className="diff-card">
            <img src="/Anvesh Bharat.jpg" alt="Team Development" style={{ width: '100%', height: 'auto', borderRadius: '6px', objectFit: 'contain', marginBottom: '12px' }} />
            <p>Form and develop competition-ready teams.</p>
          </div>
          <div className="diff-card">
            <img src="/mekathlon.webp" alt="National & International Exposure" style={{ width: '100%', height: 'auto', borderRadius: '6px', objectFit: 'contain', marginBottom: '12px' }} />
            <p>Prepare for opportunities beyond the classroom.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;