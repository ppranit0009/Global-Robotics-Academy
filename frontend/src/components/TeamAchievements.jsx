import React from 'react';

const TeamAchievements = () => {
  const achievements = [
    {
      number: '15+',
      label: 'National Wins',
      description: 'Our teams have secured top positions in national-level robotics competitions across India.'
    },
    {
      number: '8+',
      label: 'International Stages',
      description: 'Global Robotics Academy teams have represented India on international platforms.'
    },
    {
      number: '50+',
      label: 'Teams Mentored',
      description: 'Successfully mentored over 50 student-led robotics teams to achieve their goals.'
    },
    {
      number: '100+',
      label: 'Competition Participations',
      description: 'Our teams have participated in more than 100 robotics competitions and events.'
    },
    {
      number: '3+',
      label: 'World Championship Qualifiers',
      description: 'Multiple teams have qualified for prestigious world championship events.'
    },
    {
      number: '25+',
      label: 'Industry Certifications',
      description: 'Team members have earned industry-recognized certifications in robotics and automation.'
    }
  ];

  return (
    <section className="team-achievements" id="achievements" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(30px, 5vw, 60px) 0'
    }}>
      <div className="wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="achievements-header">
          <h2 style={{ 
            color: '#12181c',
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 2.5vw, 24px)'
          }}>Our Track Record Speaks for Itself</h2>
          <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>From local competitions to international stages, our teams consistently deliver excellence and innovation in robotics.</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
              <div className="achievement-description">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAchievements;