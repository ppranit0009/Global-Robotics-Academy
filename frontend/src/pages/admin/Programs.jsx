import React, { useEffect, useState } from 'react';
import { programsAPI } from '../../services/api';
import './shared.css';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Drone Competition',
    duration: '',
    prerequisites: '',
    learningOutcomes: '',
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const response = await programsAPI.getAll();
      setPrograms(response.data);
    } catch (error) {
      console.error('Error loading programs:', error);
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
        duration: item.duration || '',
        prerequisites: item.prerequisites ? item.prerequisites.join(', ') : '',
        learningOutcomes: item.learningOutcomes ? item.learningOutcomes.join(', ') : '',
        order: item.order || 0,
        isActive: item.isActive !== false,
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: '',
        description: '',
        category: 'Drone Competition',
        duration: '',
        prerequisites: '',
        learningOutcomes: '',
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
        prerequisites: formData.prerequisites.split(',').map(s => s.trim()).filter(s => s),
        learningOutcomes: formData.learningOutcomes.split(',').map(s => s.trim()).filter(s => s),
      };

      if (editingItem) {
        await programsAPI.update(editingItem._id, data);
      } else {
        await programsAPI.create(data);
      }

      handleCloseModal();
      loadPrograms();
    } catch (error) {
      console.error('Error saving program:', error);
      alert('Error saving program. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this program?')) return;

    try {
      await programsAPI.delete(id);
      loadPrograms();
    } catch (error) {
      console.error('Error deleting program:', error);
      alert('Error deleting program. Please try again.');
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
    return <div className="admin-loading">Loading programs...</div>;
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Programs Management</h2>
        <button className="btn-primary" onClick={() => handleOpenModal()}>
          ➕ Add Program
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) => (
              <tr key={program._id}>
                <td>{program.name}</td>
                <td>{program.category}</td>
                <td>{program.duration || '-'}</td>
                <td>{program.order}</td>
                <td>
                  <span className={`status-badge ${program.isActive ? 'active' : 'inactive'}`}>
                    {program.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleOpenModal(program)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(program._id)}
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
              <h3>{editingItem ? 'Edit Program' : 'Add Program'}</h3>
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
                  <option value="Drone Competition">Drone Competition</option>
                  <option value="Innovation Challenge">Innovation Challenge</option>
                  <option value="Coding Competition">Coding Competition</option>
                  <option value="STEM Competition">STEM Competition</option>
                  <option value="AI Competition">AI Competition</option>
                  <option value="Robotics Competition">Robotics Competition</option>
                </select>
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 8 weeks, 3 months"
                />
              </div>
              <div className="form-group">
                <label>Prerequisites (comma-separated)</label>
                <textarea
                  name="prerequisites"
                  value={formData.prerequisites}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g., Basic programming, Math skills"
                />
              </div>
              <div className="form-group">
                <label>Learning Outcomes (comma-separated)</label>
                <textarea
                  name="learningOutcomes"
                  value={formData.learningOutcomes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g., Python programming, Robot building, Problem solving"
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

export default Programs;
