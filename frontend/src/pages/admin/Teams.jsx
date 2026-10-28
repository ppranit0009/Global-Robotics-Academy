import React, { useEffect, useState } from 'react';
import { teamsAPI } from '../../services/api';
import './shared.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Junior',
    achievements: '',
    members: '',
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      const response = await teamsAPI.getAll();
      setTeams(response.data);
    } catch (error) {
      console.error('Error loading teams:', error);
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
        achievements: item.achievements ? item.achievements.join('\n') : '',
        members: item.members ? item.members.map(m => `${m.name},${m.role}`).join('\n') : '',
        order: item.order || 0,
        isActive: item.isActive !== false,
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: '',
        description: '',
        category: 'Junior',
        achievements: '',
        members: '',
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
        achievements: formData.achievements.split('\n').map(s => s.trim()).filter(s => s),
        members: formData.members.split('\n')
          .filter(s => s.trim())
          .map(s => {
            const [name, role] = s.split(',').map(part => part.trim());
            return { name: name || '', role: role || 'Member' };
          }),
      };

      if (editingItem) {
        await teamsAPI.update(editingItem._id, data);
      } else {
        await teamsAPI.create(data);
      }

      handleCloseModal();
      loadTeams();
    } catch (error) {
      console.error('Error saving team:', error);
      alert('Error saving team. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this team?')) return;

    try {
      await teamsAPI.delete(id);
      loadTeams();
    } catch (error) {
      console.error('Error deleting team:', error);
      alert('Error deleting team. Please try again.');
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
    return <div className="admin-loading">Loading teams...</div>;
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Teams Management</h2>
        <button className="btn-primary" onClick={() => handleOpenModal()}>
          ➕ Add Team
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Members</th>
              <th>Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.category}</td>
                <td>{team.members?.length || 0}</td>
                <td>{team.order}</td>
                <td>
                  <span className={`status-badge ${team.isActive ? 'active' : 'inactive'}`}>
                    {team.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleOpenModal(team)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(team._id)}
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
              <h3>{editingItem ? 'Edit Team' : 'Add Team'}</h3>
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
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="College">College</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
              <div className="form-group">
                <label>Achievements (one per line)</label>
                <textarea
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g.,&#10;First Place - Regional 2024&#10;Best Design Award"
                />
              </div>
              <div className="form-group">
                <label>Members (one per line: name,role)</label>
                <textarea
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g.,&#10;John Smith,Captain&#10;Jane Doe,Engineer"
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

export default Teams;
