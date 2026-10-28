import React, { useEffect, useState } from 'react';
import { competitionsAPI } from '../../services/api';
import './shared.css';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Robotics',
    eligibility: '',
    ageGroups: '',
    registrationRequirements: '',
    competitionDetails: '',
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    loadCompetitions();
  }, []);

  const loadCompetitions = async () => {
    try {
      const response = await competitionsAPI.getAll();
      setCompetitions(response.data);
    } catch (error) {
      console.error('Error loading competitions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        name: item.name,
        description: item.description,
        category: item.category,
        eligibility: item.eligibility || '',
        ageGroups: item.ageGroups ? item.ageGroups.join(', ') : '',
        registrationRequirements: item.registrationRequirements || '',
        competitionDetails: item.competitionDetails || '',
        order: item.order || 0,
        isActive: item.isActive !== false,
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: '',
        description: '',
        category: 'Robotics',
        eligibility: '',
        ageGroups: '',
        registrationRequirements: '',
        competitionDetails: '',
        order: 0,
        isActive: true,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingItem(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        ageGroups: formData.ageGroups.split(',').map(s => s.trim()).filter(s => s),
      };

      if (editingItem) {
        await competitionsAPI.update(editingItem._id, data);
      } else {
        await competitionsAPI.create(data);
      }

      handleCloseModal();
      loadCompetitions();
    } catch (error) {
      console.error('Error saving competition:', error);
      alert('Error saving competition. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this competition?')) return;

    try {
      await competitionsAPI.delete(id);
      loadCompetitions();
    } catch (error) {
      console.error('Error deleting competition:', error);
      alert('Error deleting competition. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (loading) {
    return <div className="admin-loading">Loading competitions...</div>;
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Competitions Management</h2>
        <button className="btn-primary" onClick={() => handleOpenModal()}>
          ➕ Add Competition
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {competitions.map((competition) => (
              <tr key={competition._id}>
                <td>{competition.name}</td>
                <td>{competition.category}</td>
                <td>{competition.order}</td>
                <td>
                  <span className={`status-badge ${competition.isActive ? 'active' : 'inactive'}`}>
                    {competition.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleOpenModal(competition)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(competition._id)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingItem ? 'Edit Competition' : 'Add Competition'}</h3>
              <button className="modal-close" onClick={handleCloseModal}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="Robotics">Robotics</option>
                  <option value="AI">AI</option>
                  <option value="STEM">STEM</option>
                  <option value="Coding">Coding</option>
                  <option value="Drone">Drone</option>
                  <option value="Innovation">Innovation</option>
                </select>
              </div>
              <div className="form-group">
                <label>Eligibility</label>
                <input
                  type="text"
                  name="eligibility"
                  value={formData.eligibility}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age Groups (comma-separated)</label>
                <input
                  type="text"
                  name="ageGroups"
                  value={formData.ageGroups}
                  onChange={handleChange}
                  placeholder="e.g., 8-10, 11-13, 14-16"
                />
              </div>
              <div className="form-group">
                <label>Registration Requirements</label>
                <textarea
                  name="registrationRequirements"
                  value={formData.registrationRequirements}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label>Competition Details</label>
                <textarea
                  name="competitionDetails"
                  value={formData.competitionDetails}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Order</label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                    />
                    Active
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingItem ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Competitions;
