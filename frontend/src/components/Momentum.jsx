import React from 'react';

const Momentum = () => {
  return (
    <section className="momentum">
      <div className="wrap momentum-inner">
        <h2 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '800', lineHeight: '1.1', color: '#12181c' }}>Where Students<br/><span className="accent" style={{ color: '#0096B9' }}>Become Competitors.</span></h2>
        <div className="momentum-stats">
          <div><div className="num">5,000+</div><div className="cap">Students Trained</div></div>
          <div><div className="num">Multiple</div><div className="cap">Robotics Teams</div></div>
          <div><div className="num">Multiple</div><div className="cap">Competition Pathways</div></div>
        </div>
        <div className="ghost-word">GRA</div>
      </div>
    </section>
  );
};

export default Momentum;