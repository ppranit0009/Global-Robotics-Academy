import React, { useEffect, useState } from 'react';
import { galleryAPI } from '../../services/api';
import './shared.css';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Training',
    imageUrl: '',
    videoUrl: '',
    type: 'image',
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const response = await galleryAPI.getAll();
      setGalleryItems(response.data);
    } catch (error) {
      console.error('Error loading gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        description: item.description,
        category: item.category,
        imageUrl: item.imageUrl || '',
        videoUrl: item.videoUrl || '',
        type: item.type,
        order: item.order || 0,
        isActive: item.isActive !== false,
      });
    } else {
      setEditingItem(null);
      setFormData({
        title: '',
        description: '',
        category: 'Training',
        imageUrl: '',
        videoUrl: '',
        type: 'image',
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
      if (editingItem) {
        await galleryAPI.update(editingItem._id, formData);
      } else {
        await galleryAPI.create(formData);
      }

      handleCloseModal();
      loadGallery();
    } catch (error) {
      console.error('Error saving gallery item:', error);
      alert('Error saving gallery item. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      await galleryAPI.delete(id);
      loadGallery();
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      alert('Error deleting gallery item. Please try again.');
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
    return <div className="admin-loading">Loading gallery...</div>;
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Gallery Management</h2>
        <button className="btn-primary" onClick={() => handleOpenModal()}>
          ➕ Add Gallery Item
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryItems.map((item) => (
              <tr key={item._id}>
                <td>
                  {item.type === 'image' && item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.title} className="gallery-preview" />
                  ) : (
                    <span className="no-preview">🎬</span>
                  )}
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <span className={`type-badge ${item.type}`}>
                    {item.type === 'image' ? '🖼️ Image' : '🎬 Video'}
                  </span>
                </td>
                <td>{item.order}</td>
                <td>
                  <span className={`status-badge ${item.isActive ? 'active' : 'inactive'}`}>
                    {item.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleOpenModal(item)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(item._id)}
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
              <h3>{editingItem ? 'Edit Gallery Item' : 'Add Gallery Item'}</h3>
              <button className="modal-close" onClick={handleCloseModal}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
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
                  <option value="Training">Training</option>
                  <option value="Team Activities">Team Activities</option>
                  <option value="Robot Testing">Robot Testing</option>
                  <option value="Competition">Competition</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Type *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              {formData.type === 'image' && (
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              )}
              {formData.type === 'video' && (
                <div className="form-group">
                  <label>Video URL</label>
                  <input
                    type="url"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
              )}
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

export default Gallery;
