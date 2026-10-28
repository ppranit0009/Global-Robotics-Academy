import React, { useEffect, useState } from 'react';
import { teamsAPI } from '../services/api';
import { Link } from 'react-router-dom';

// SVG Icon Components
const RobotHeadIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="16" height="14" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="16" r="2" fill={color}/>
    <circle cx="20" cy="16" r="2" fill={color}/>
    <path d="M14 20 L18 20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="6" y="14" width="2" height="6" rx="1" fill={color}/>
    <rect x="24" y="14" width="2" height="6" rx="1" fill={color}/>
    <rect x="11" y="6" width="10" height="4" rx="1" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

const RoboticArmIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="8" height="8" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="10" y="8" width="4" height="12" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="22" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M15 22 L22 22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 22 L25 18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M25 18 L28 22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M25 18 L25 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GearClawIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="8" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M16 4 L16 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 24 L16 28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 16 L8 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 16 L28 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 7 L10 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 22 L25 25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 25 L10 22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 10 L25 7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="3" fill={color}/>
  </svg>
);

const CircuitIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M8 12 L12 12 L14 16 L18 16 L20 12 L24 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20 L10 20 L12 24 L16 24 L18 20 L24 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="12" r="2" fill={color}/>
    <circle cx="24" cy="12" r="2" fill={color}/>
    <circle cx="8" cy="20" r="2" fill={color}/>
    <circle cx="24" cy="20" r="2" fill={color}/>
    <circle cx="16" cy="16" r="2" fill={color}/>
  </svg>
);

const GearIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="6" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M16 2 L16 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 26 L16 30" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 16 L6 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 16 L30 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.34 6.34 L9.17 9.17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M22.83 22.83 L25.66 25.66" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.34 25.66 L9.17 22.83" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M22.83 9.17 L25.66 6.34" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="2" fill={color}/>
  </svg>
);

const StarGearIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2 L19 10 L28 10 L21 16 L24 24 L16 19 L8 24 L11 16 L4 10 L13 10 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="4" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M16 10 L16 12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 20 L16 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 16 L12 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 16 L22 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const iconMap = {
  robot: RobotHeadIcon,
  arm: RoboticArmIcon,
  claw: GearClawIcon,
  circuit: CircuitIcon,
  gear: GearIcon,
  star: StarGearIcon
};

const Teams = ({ showAll = false }) => {
  const [teams, setTeams] = useState([]);

  const getDefaultImage = (teamName) => {
    const imageMap = {
      'Team Aviot-o-Virture': '/Team  Aviot-o-Virture.png',
      'Team Kakli Robotics': '/Team Kakli Robotics.png',
      'Team FORTRANS': '/team FORTRANS.png',
      'Team Atutomatrix': '/team Atutomatrix.png',
      'Team Vhyuastra': '/Vyuhaastra Robotics.png',
      'Team VhyuAstra Junior': '/Vyuhaastra Robotics.png',
      'Team Vyuhaastra': '/Vyuhaastra Robotics.png',
      'Team Vyuhaastra Robotics': '/Vyuhaastra Robotics.png'
    };
    return imageMap[teamName] || null;
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await teamsAPI.getAll();
      // If API returns teams without images, add default images
      const teamsWithImages = response.data.map(team => ({
        ...team,
        image: team.image || getDefaultImage(team.name)
      }));
      setTeams(teamsWithImages);
    } catch (error) {
      console.error('Error fetching teams:', error);
      // Fallback to static data if API fails
      setTeams([
        { 
          name: 'Team Aviot-o-Virture', 
          description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
          color: '#2196F3',
          image: '/Team  Aviot-o-Virture.png'
        },
        { 
          name: 'Team Kakli Robotics', 
          description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
          color: '#FFC107',
          image: '/Team Kakli Robotics.png'
        },
        { 
          name: 'Team FORTRANS', 
          description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
          color: '#9C27B0',
          image: '/team FORTRANS.png'
        },
        { 
          name: 'Team Atutomatrix', 
          description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
          color: '#4CAF50',
          image: '/team Atutomatrix.png'
        },
        { 
          name: 'Team Vhyuastra', 
          description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
          color: '#F44336',
          image: '/Vyuhaastra Robotics.png'
        },
        { 
          name: 'Team VhyuAstra Junior', 
          description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
          color: '#2196F3',
          image: '/Vyuhaastra Robotics.png'
        },
      ]);
    }
  };

  const displayTeams = showAll ? teams : teams.slice(0, 4);
  const isTeamsPage = showAll;

  const getIconComponent = (iconType, color) => {
    const IconComponent = iconMap[iconType] || RobotHeadIcon;
    return <IconComponent color={color} />;
  };

  const getTeamLogo = (team) => {
    if (team.image) {
      return <img src={team.image} alt={team.name} className="team-logo-image" />;
    }
    if (team.iconType) {
      return <div className="team-icon" style={{ color: team.color }}>
        {getIconComponent(team.iconType, team.color)}
      </div>;
    }
    return null;
  };

  return (
    <section className="teams" id="teams" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(30px, 5vw, 60px) 0'
    }}>
      <div className="wrap teams-grid" style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'center' }}>
        <div className="teams-text">
          <h2 style={{ 
            color: '#12181c',
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 2.5vw, 24px)'
          }}>We Don't<br/>Just Train<br/>Students.<br/><span className="orange" style={{ color: '#0096B9' }}>We Build<br/>Teams.</span></h2>
          <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>Global Robotics Academy provides the training ecosystem behind student-led robotics teams participating in different technology competitions.</p>
          <a className="btn outline" href="#contact">Build Your Team ↗</a>
        </div>
        <div className={`teams-cards-grid ${isTeamsPage ? 'three-columns' : ''}`}>
          {displayTeams.map((team, index) => (
            <div className="team-card" key={index} style={{ borderColor: team.color }}>
              <div className="team-card-header">
                <div className="team-number">Team 0{index + 1}</div>
                {getTeamLogo(team)}
              </div>
              <div className="team-card-body">
                <h4>{team.name}</h4>
                <p>{team.description}</p>
              </div>
            </div>
          ))}
          {!isTeamsPage && teams.length > 4 && (
            <Link to="/teams" className="btn outline view-more-btn">View More Teams ↗</Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teams;