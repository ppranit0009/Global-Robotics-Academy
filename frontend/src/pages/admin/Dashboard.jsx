import React, { useEffect, useState } from 'react';
import { getDashboardStats } from '../../services/adminService';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    competitions: 0,
    programs: 0,
    teams: 0,
    gallery: 0,
    contact: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: 'Competitions', value: stats.competitions, icon: '🏆', color: '#e94560' },
    { title: 'Programs', value: stats.programs, icon: '📚', color: '#0f3460' },
    { title: 'Teams', value: stats.teams, icon: '👥', color: '#16c79a' },
    { title: 'Gallery Items', value: stats.gallery, icon: '🖼️', color: '#f39c12' },
    { title: 'Contact Messages', value: stats.contact, icon: '📧', color: '#9b59b6' },
  ];

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard Overview</h2>
      <div className="stats-grid">
        {statCards.map((stat) => (
          <div key={stat.title} className="stat-card" style={{ '--card-color': stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <a href="/admin/competitions" className="action-btn">
            <span>➕</span> Add Competition
          </a>
          <a href="/admin/programs" className="action-btn">
            <span>➕</span> Add Program
          </a>
          <a href="/admin/teams" className="action-btn">
            <span>➕</span> Add Team
          </a>
          <a href="/admin/gallery" className="action-btn">
            <span>➕</span> Add Gallery Item
          </a>
        </div>
      </div>

      <div className="dashboard-info">
        <h3>System Information</h3>
        <div className="info-card">
          <p><strong>Admin Panel Version:</strong> 1.0.0</p>
          <p><strong>Backend API:</strong> {import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}</p>
          <p><strong>Status:</strong> <span className="status-online">Online</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
