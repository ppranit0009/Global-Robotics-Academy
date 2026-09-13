import React from 'react';

const Pathway = () => {
  const milestones = [
    { number: '01', phase: 'FOUNDATION', title: 'LEARN', description: 'Learn the fundamentals of electronics, mechanics, sensors & motors.', icon: 'chip' },
    { number: '02', phase: 'MAKER', title: 'BUILD', description: 'Turn ideas into a working robot/model with their own hands.', icon: 'robot' },
    { number: '03', phase: 'CONTROL', title: 'PROGRAM', description: 'Program the robot/model to move, sense, think and react.', icon: 'code' },
    { number: '04', phase: 'DEBUG', title: 'TEST', description: 'Test, find failures, debug and make the robot/model work reliably.', icon: 'search' },
    { number: '05', phase: 'REFINE', title: 'IMPROVE', description: 'Upgrade every version to become faster, stronger and smarter.', icon: 'upgrade' },
    { number: '06', phase: 'CHALLENGE', title: 'COMPETE', description: 'Train through challenges and compete on real competition arenas.', icon: 'trophy' },
    { number: '07', phase: 'PROGRESS', title: 'QUALIFY', description: 'Build strategy, teamwork and performance to qualify for competitions.', icon: 'team' },
    { number: '08', phase: 'REPRESENT', title: 'REPRESENT', description: 'Represent the academy at national and international competitions.', icon: 'medal' },
  ];

  const getIcon = (iconType) => {
    return null;
  };

  return (
    <section className="roadmap-section" style={{ minHeight: '100vh', maxHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="roadmap-container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="hero">
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '800', lineHeight: '1.1', color: '#12181c' }}>FROM FIRST BUILD<br/>TO COMPETITION DAY.</h1>
          <p className="hero-copy" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>
            At Global Robotics Academy, the goal is simple —
            <strong>build students who can actually build and operate robots,
            not just follow a project manual.</strong>
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line">
            <div className="timeline-progress"></div>
          </div>

          {milestones.map((milestone, index) => (
            <div className="milestone" key={index}>
              <div className="connector"></div>
              <div className="node"></div>
              <div className="card">
                <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', lineHeight: '1.3', color: '#12181c' }}>{milestone.number}. {milestone.title}</h2>
                <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.4', color: '#5a6067' }}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pathway;