import React, { useEffect, useState } from 'react';
import { contactAPI } from '../../services/api';
import './shared.css';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const response = await contactAPI.getAll();
      setContacts(response.data);
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact submission?')) return;

    try {
      await contactAPI.delete(id);
      loadContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Error deleting contact. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return <div className="admin-loading">Loading contact submissions...</div>;
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h2>Contact Submissions</h2>
      </div>

      {contacts.length === 0 ? (
        <div className="empty-state">
          <p>No contact submissions yet.</p>
        </div>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject || 'N/A'}</td>
                  <td>{formatDate(contact.createdAt)}</td>
                  <td>
                    <button
                      className="btn-view"
                      onClick={() => handleViewDetails(contact)}
                    >
                      👁️ View
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(contact._id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && selectedContact && (
        <div className="modal-overlay">
          <div className="modal-content modal-large">
            <div className="modal-header">
              <h3>Contact Details</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="contact-detail">
                <strong>Name:</strong>
                <span>{selectedContact.name}</span>
              </div>
              <div className="contact-detail">
                <strong>Email:</strong>
                <span>{selectedContact.email}</span>
              </div>
              {selectedContact.phone && (
                <div className="contact-detail">
                  <strong>Phone:</strong>
                  <span>{selectedContact.phone}</span>
                </div>
              )}
              {selectedContact.subject && (
                <div className="contact-detail">
                  <strong>Subject:</strong>
                  <span>{selectedContact.subject}</span>
                </div>
              )}
              <div className="contact-detail">
                <strong>Message:</strong>
                <p className="contact-message">{selectedContact.message}</p>
              </div>
              <div className="contact-detail">
                <strong>Submitted:</strong>
                <span>{formatDate(selectedContact.createdAt)}</span>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <a
                href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject || 'Inquiry'}`}
                className="btn-primary"
              >
                📧 Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
