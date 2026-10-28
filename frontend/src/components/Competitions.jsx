import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { competitionsAPI } from '../services/api';

const Competitions = ({ showAllCompetitions = false }) => {
  const navigate = useNavigate();
  const [competitions, setCompetitions] = useState([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    fetchCompetitions();
  }, []);

  useEffect(() => {
    if (competitions.length > 0) {
      setupScrollAnimation();
    }
  }, [competitions]);

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

    document.querySelectorAll('.comp-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  };

  const fetchCompetitions = async () => {
    try {
      const response = await competitionsAPI.getAll();
      setCompetitions(response.data);
    } catch (error) {
      console.error('Error fetching competitions:', error);
      // Fallback to static data if API fails
      setCompetitions([
        { name: 'School Robotics Championships', description: 'Competition preparation pathway for students and teams.', category: 'Robotics', image: '/technoxian.jpg' },
        { name: 'IRC League', description: 'Competition preparation pathway for students and teams.', category: 'Robotics', image: '/wro.png' },
        { name: 'Smart India Hackathon – Hardware Edition', description: 'Competition preparation pathway for students and teams.', category: 'Robotics', image: '/Anvesh Bharat.jpg' },
        { name: 'ABU Robocon India', description: 'Competition preparation pathway for students and teams.', category: 'Robotics', image: '/mekathlon.webp' },
        { name: 'e-Yantra Robotics Competition', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'IIT Techfest Robotics Competition', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'Anvesh Bharat', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'International Robotics Competition | Mekathlon Event', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
      ]);
    }
  };

  return (
    <section className="competitions" id="competitions" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="competitions-layout" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(30px, 5vw, 60px)' }}>
          <div className="competitions-text">
            <h2 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-4xl)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'clamp(16px, 2.5vw, 24px)'
            }}>Prepare for the Competitions That Matter.</h2>
            {showAllCompetitions && (
              <>
                <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>Competition availability, eligibility and participation depend on the respective competition's rules, age categories, selection process and registration requirements.</p>
              </>
            )}
          </div>
          <div className="competitions-grid">
            <div className="comp-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gridAutoFlow: 'row',
              gap: '24px',
              width: '100%'
            }}>
              {competitions.slice(0, 8).map((competition, index) => (
                <div className={`comp-card ${visibleCards.has(index) ? 'visible' : ''}`} key={index} data-index={index}>
                  {competition.image && (
                    <img src={competition.image} alt={competition.name} style={{ 
                      width: '100%',
                      height: 'auto',
                      borderRadius: '6px',
                      objectFit: 'contain',
                      marginBottom: '12px'
                    }} />
                  )}
                </div>
              ))}
            </div>
            {!showAllCompetitions && competitions.length > 8 && (
              <button className="see-more-btn" onClick={() => navigate('/competitions')}>
                See More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;