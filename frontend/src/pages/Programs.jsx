import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const Programs = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    setupScrollAnimation();
  }, []);

  const setupScrollAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.section;
            setTimeout(() => {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  };

  const programs = [
    {
      id: 1,
      category: 'Robotics',
      title: 'Robotics Competition Preparation',
      description: 'Comprehensive training for school and national robotics championships, covering mechanical design, electronics, programming, and competition strategy.',
      duration: '6-12 months',
      ageGroup: '10-18 years',
      skillLevel: 'Beginner to Advanced',
      features: ['Mechanical Design', 'Electronics & Circuits', 'Programming & Logic', 'Competition Strategy', 'Team Building'],
      icon: '🤖'
    },
    {
      id: 2,
      category: 'Drone',
      title: 'Drone Competition Preparation',
      description: 'Specialized program for drone racing, surveillance, and payload competitions, focusing on aerodynamics, flight control, and precision piloting.',
      duration: '4-8 months',
      ageGroup: '12-18 years',
      skillLevel: 'Intermediate',
      features: ['Aerodynamics', 'Flight Control Systems', 'Precision Piloting', 'Payload Management', 'Safety Protocols'],
      icon: '🚁'
    },
    {
      id: 3,
      category: 'AI & Coding',
      title: 'AI & Coding Competition Preparation',
      description: 'Training for hackathons, AI challenges, and coding competitions with emphasis on algorithms, machine learning, and software development.',
      duration: '6-10 months',
      ageGroup: '13-18 years',
      skillLevel: 'Intermediate to Advanced',
      features: ['Algorithms & Data Structures', 'Machine Learning', 'Software Development', 'Problem Solving', 'Hackathon Strategy'],
      icon: '💻'
    },
    {
      id: 4,
      category: 'Innovation',
      title: 'Innovation Challenge Preparation',
      description: 'Program focused on creative problem-solving, prototyping, and presentation skills for innovation and design thinking competitions.',
      duration: '4-6 months',
      ageGroup: '11-18 years',
      skillLevel: 'All Levels',
      features: ['Design Thinking', 'Prototyping', 'Creative Problem Solving', 'Presentation Skills', 'Project Management'],
      icon: '💡'
    },
    {
      id: 5,
      category: 'Advanced Robotics',
      title: 'Advanced Robotics & Automation',
      description: 'Advanced program for experienced students focusing on autonomous systems, computer vision, and industrial automation concepts.',
      duration: '8-14 months',
      ageGroup: '14-18 years',
      skillLevel: 'Advanced',
      features: ['Computer Vision', 'Autonomous Systems', 'Industrial Automation', 'Advanced Sensors', 'ROS Programming'],
      icon: '⚙️'
    },
    {
      id: 6,
      category: 'Team Training',
      title: 'Competition Team Training',
      description: 'Complete team development program for forming and training competition-ready robotics teams with defined roles and responsibilities.',
      duration: '12-18 months',
      ageGroup: '12-18 years',
      skillLevel: 'All Levels',
      features: ['Team Formation', 'Role Definition', 'Collaborative Skills', 'Leadership Training', 'Competition Simulation'],
      icon: '👥'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="programs-hero" data-section="hero" style={{ paddingLeft: 'clamp(16px, 3vw, 40px)', paddingRight: '0' }}>
        <div className={`programs-hero-content ${visibleSections.has('hero') ? 'visible' : ''}`} style={{ marginLeft: '0', maxWidth: '100%' }}>
          <h1>Competition-Ready<br/><span className="accent">Training Pathways</span></h1>
          <p className="lede">
            Specialized programs designed to transform students into competition-ready innovators. From foundational skills to advanced competition strategies.
          </p>
          <div className="programs-hero-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Specialized Programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Competition Wins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="programs-grid-section" data-section="programs">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('programs') ? 'visible' : ''}`}>
            <h2>Choose Your Competition Pathway</h2>
            <p className="lede">Select a program aligned with your interests and competition goals.</p>
          </div>
          
          <div className="programs-cards-grid">
            {programs.map((program, index) => (
              <div className={`program-card ${visibleSections.has('programs') ? 'visible' : ''}`} key={program.id} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="program-card-header">
                  <div className="program-icon">{program.icon}</div>
                  <span className="program-category">{program.category}</span>
                </div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
                
                <div className="program-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{program.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Age Group:</span>
                    <span className="detail-value">{program.ageGroup}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Skill Level:</span>
                    <span className="detail-value">{program.skillLevel}</span>
                  </div>
                </div>

                <div className="program-features">
                  {program.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <Link className="program-cta" to="/contact">Enroll Now ↗</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="program-structure-section" data-section="structure">
        <div className="wrap">
          <div className={`structure-content ${visibleSections.has('structure') ? 'visible' : ''}`}>
            <div className="structure-text">
              <h2>How Our Programs Work</h2>
              <p className="structure-description">
                Our programs follow a structured approach designed to build comprehensive skills and prepare students for real competition scenarios.
              </p>
              
              <div className="structure-steps">
                <div className="structure-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h4>Assessment</h4>
                    <p>Evaluate current skill level and recommend appropriate program pathway.</p>
                  </div>
                </div>
                <div className="structure-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h4>Foundation Training</h4>
                    <p>Build core concepts through hands-on projects and experiments.</p>
                  </div>
                </div>
                <div className="structure-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h4>Advanced Skills</h4>
                    <p>Develop specialized skills relevant to your chosen competition category.</p>
                  </div>
                </div>
                <div className="structure-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h4>Competition Prep</h4>
                    <p>Train on actual competition challenges, rules, and strategies.</p>
                  </div>
                </div>
                <div className="structure-step">
                  <div className="step-number">05</div>
                  <div className="step-content">
                    <h4>Team Integration</h4>
                    <p>Join or form a team and practice collaborative competition scenarios.</p>
                  </div>
                </div>
                <div className="structure-step">
                  <div className="step-number">06</div>
                  <div className="step-content">
                    <h4>Competition Ready</h4>
                    <p>Participate in competitions with mentor support and guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Programs Section */}
      <section className="programs-why-section" data-section="why">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('why') ? 'visible' : ''}`}>
            <h2>What Makes Our Training Different</h2>
            <p className="lede">We don't just teach—we prepare students to win.</p>
          </div>
          
          <div className="why-grid">
            <div className={`why-card ${visibleSections.has('why') ? 'visible' : ''}`}>
              <div className="why-icon">🎯</div>
              <h4>Competition-Focused</h4>
              <p>Every module is designed with real competition challenges and success metrics in mind.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why') ? 'visible' : ''}`}>
              <div className="why-icon">🔧</div>
              <h4>Hands-On Learning</h4>
              <p>Build real robots, write actual code, and solve genuine problems—no simulations.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why') ? 'visible' : ''}`}>
              <div className="why-icon">👨‍🏫</div>
              <h4>Expert Mentorship</h4>
              <p>Learn from mentors with actual competition experience and technical expertise.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why') ? 'visible' : ''}`}>
              <div className="why-icon">🏆</div>
              <h4>Proven Results</h4>
              <p>Our students consistently perform well in national and international competitions.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why') ? 'visible' : ''}`}>
              <div className="why-icon">📊</div>
              <h4>Progress Tracking</h4>
              <p>Regular assessments and feedback to ensure continuous improvement.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why') ? 'visible' : ''}`}>
              <div className="why-icon">🌐</div>
              <h4>Industry Exposure</h4>
              <p>Connect with industry partners and understand real-world applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta-section" data-section="cta" style={{ paddingLeft: 'clamp(16px, 3vw, 40px)', paddingRight: '0' }}>
        <div className={`cta-content ${visibleSections.has('cta') ? 'visible' : ''}`} style={{
          textAlign: 'left',
          border: '2px solid #0096B9',
          borderRadius: '12px',
          padding: 'clamp(24px, 4vw, 40px)',
          backgroundColor: '#fff',
          marginLeft: '0',
          marginRight: 'auto',
          maxWidth: '100%'
        }}>
          <h2>From<br/>Classroom<br/>to<br/>Competition.</h2>
          <p>Global Robotics Academy prepares students for national and international robotics, STEM, AI, coding, innovation and technology competitions.</p>
          <div className="cta-buttons" style={{ justifyContent: 'flex-start' }}>
            <Link className="btn" to="/login">Start Your Competition Journey ↗</Link>
            <Link className="btn outline" to="/competitions">Explore Competitions</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;