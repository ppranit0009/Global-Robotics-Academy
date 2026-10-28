import React from 'react';

const TrainingLoop = () => {
  return (
    <section className="statsband" id="impact">
      <div className="wrap loop-grid">
        <div>
          <h2 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '800', lineHeight: '1.1', color: '#12181c' }}>Robotics is more<br/>than a class.</h2>
          <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>At Global Robotics Academy, students move beyond classroom projects and train for real competition environments where engineering, programming, teamwork, strategy, problem-solving and innovation come together.</p>
        </div>
        <div className="loop-steps">
          <div className="loop-step"><div className="t">Learn</div></div>
          <div className="loop-step"><div className="t">Build</div></div>
          <div className="loop-step"><div className="t">Program</div></div>
          <div className="loop-step"><div className="t">Test</div></div>
          <div className="loop-step"><div className="t">Optimize</div></div>
          <div className="loop-step"><div className="t">Compete</div></div>
          <div className="loop-step"><div className="t">Qualify</div></div>
          <div className="loop-step"><div className="t">Go Global</div></div>
        </div>
      </div>
    </section>
  );
};

export default TrainingLoop;