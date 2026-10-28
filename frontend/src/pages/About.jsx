import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Slideshow from '../components/Slideshow.jsx';
import PartnerBand from '../components/PartnerBand.jsx';
import Gallery from '../components/Gallery.jsx';
import TeamSection from '../components/TeamSection.jsx';

const About = () => {
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
    <div className="page">
      {/* Hero Section */}
      <section className="hero" data-section="hero">
        {/* Background decoration */}
        <div className="bg-circle hero-circle-one"></div>
        <div className="bg-circle hero-circle-two"></div>
        
        <div className="wrap hero-grid">
          <div className="hero-content hero-intro">
            <div className="section-label">
              ABOUT GLOBAL ROBOTICS ACADEMY
              <span></span>
            </div>
            <h1>Building the Next<br/>Generation of<br/><span className="orange">Robotics Champions</span></h1>
            <p className="lede">We don't just teach robotics—we prepare students to compete, win, and lead in national and international technology competitions.</p>
            <div className="hero-ctas">
              <Link className="btn" to="/contact">Get Started ↗</Link>
              <Link className="btn outline" to="/programs">View Programs</Link>
            </div>
          </div>
          <div className="hero-card">
            <Slideshow />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="momentum-stats-section about-mission-section" data-section="mission">
        <div className="wrap">
          <div className={`mission-content ${visibleSections.has('mission') ? 'visible' : ''}`}>
            <div className="mission-text">
              <h2>Transforming Students into Competition-Ready Innovators</h2>
              <p className="mission-description">
                Global Robotics Academy exists to bridge the gap between classroom learning and real-world competition success. We believe every student has the potential to excel in robotics, STEM, AI, coding, and innovation when given the right training, mentorship, and opportunities.
              </p>
              <p className="mission-description">
                Our academy provides a complete ecosystem where students don't just learn concepts—they apply them in real competition scenarios. From building their first robot to representing their schools and countries on international stages, we guide them through every step of their competitive journey.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Multiple</div>
                <div className="stat-label">Robotics Teams</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">National</div>
                <div className="stat-label">& International Competitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="difference about-what-we-do-section" data-section="what-we-do">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
            <h2>Comprehensive Competition Preparation Ecosystem</h2>
            <p className="lede">We provide end-to-end training and support for students aspiring to excel in technology competitions.</p>
          </div>
          
          <div className="diff-cards">
            <div className={`diff-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="n">01</div>
              <h4>Competition Training</h4>
              <p>Specialized preparation for national and international robotics, STEM, AI, coding, and innovation competitions with real competition scenarios and strategies.</p>
            </div>
            <div className={`diff-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="n">02</div>
              <h4>Robot Building</h4>
              <p>Hands-on experience designing, assembling, programming, testing, and optimizing robots for specific competition challenges and requirements.</p>
            </div>
            <div className={`diff-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="n">03</div>
              <h4>Team Development</h4>
              <p>Forming and nurturing student-led robotics teams with focus on teamwork, leadership, communication, and collaborative problem-solving skills.</p>
            </div>
            <div className={`diff-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="n">04</div>
              <h4>Structured Learning</h4>
              <p>Progressive curriculum from foundations to advanced concepts, covering electronics, mechanics, sensors, motors, programming, and competition strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="roadmap-section" data-section="approach">
        <div className="roadmap-container">
          <div className="hero">
            <h1>From First Build<br/>to Competition Day.</h1>
            <p className="hero-copy">
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
                  <h2>{milestone.number}. {milestone.title}</h2>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="momentum-stats-section about-programs-section" data-section="programs">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('programs') ? 'visible' : ''}`}>
            <h2>Specialized Competition Pathways</h2>
            <p className="lede">We offer focused training programs for different competition categories and skill levels.</p>
          </div>
          
          <div className="loop-steps">
            <div className={`loop-step ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="n">Robotics</div>
              <div className="t">Robotics Competition Preparation</div>
              <p>Comprehensive training for school and national robotics championships.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="n">Drones</div>
              <div className="t">Drone Competition Preparation</div>
              <p>Specialized program for drone racing, surveillance, and payload competitions.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="n">AI & Coding</div>
              <div className="t">AI & Coding Competition Preparation</div>
              <p>Training for hackathons, AI challenges, and coding competitions.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="n">Innovation</div>
              <div className="t">Innovation Challenge Preparation</div>
              <p>Program focused on creative problem-solving and prototyping skills.</p>
            </div>
          </div>
          
          <div className="programs-cta">
            <Link className="btn" to="/programs">Explore All Programs ↗</Link>
          </div>
        </div>
      </section>

      {/* Team Ecosystem Section */}
      <TeamSection showAll={false} />

      {/* Partner Band Section */}
      <PartnerBand />

      {/* Gallery Section */}
      <Gallery />

      {/* Why Choose Us Section */}
      <section className="momentum-stats-section about-why-us-section" data-section="why-us">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('why-us') ? 'visible' : ''}`}>
            <h2>The GRA Difference</h2>
            <p className="lede">What sets us apart from traditional robotics training programs.</p>
          </div>
          
          <div className="loop-steps">
            <div className={`loop-step ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="n">01</div>
              <div className="t">Competition-Focused Training</div>
              <p>Real competition challenges, rules, strategy, and performance metrics—not just theoretical concepts.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="n">02</div>
              <div className="t">Real Robot Building</div>
              <p>Design, assemble, program, test, and improve actual robots—no simulations or pre-built kits.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="n">03</div>
              <div className="t">Team Development</div>
              <p>Form and develop competition-ready teams with proper structure, roles, and collaboration.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="n">04</div>
              <div className="t">National & International Exposure</div>
              <p>Prepare for opportunities beyond the classroom with access to prestigious competitions.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="n">05</div>
              <div className="t">Experienced Mentorship</div>
              <p>Guidance from mentors with competition experience and technical expertise.</p>
            </div>
            
            <div className={`loop-step ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="n">06</div>
              <div className="t">Complete Ecosystem</div>
              <p>From training to team formation to competition participation—we handle the entire journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero about-cta-section" data-section="cta">
        <div className="wrap">
          <div className={`cta-content ${visibleSections.has('cta') ? 'visible' : ''}`}>
            <h2>Ready to Start Your Competition Journey?</h2>
            <p className="lede">Join Global Robotics Academy and transform from classroom learner to competition-ready innovator.</p>
            <div className="hero-ctas">
              <Link className="btn" to="/contact">Get Started ↗</Link>
              <Link className="btn outline" to="/competitions">View Competitions</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;