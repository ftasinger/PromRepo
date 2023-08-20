import React, { useState } from 'react';
import '../movie.css';

function Contact() {
  const [contacts, setContacts] = useState([
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    { firstName: 'Logan', lastName: 'Smith', email: 'logan@example.com' },
  ]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newContact = { firstName, lastName, email };
    setContacts([...contacts, newContact]);

    // Reset the form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleEditContact = (index) => {
    const editedContact = contacts[index];
    setEditingIndex(index);
    setEditedFirstName(editedContact.firstName);
    setEditedLastName(editedContact.lastName);
    setEditedEmail(editedContact.email);
  };

  const handleEditSubmit = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].firstName = editedFirstName;
    updatedContacts[index].lastName = editedLastName;
    updatedContacts[index].email = editedEmail;
    setContacts(updatedContacts);
    setEditingIndex(-1); // Clear editing state
  };

  return (
    <div className="contact-container">
      {/* Contact form */}
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <div className="text-center">
          <input type="submit" className="btn btn-danger" value="Submit" />
        </div>
      </form>

      {/* Display contacts */}
      <div className="mt-4">
        <h2 className="p-3 mb-2 bg-danger text-white">Contact List</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="p-3 mb-2 bg-danger text-white">First Name</th>
              <th className="p-3 mb-2 bg-danger text-white">Last Name</th>
              <th className="p-3 mb-2 bg-danger text-white">Email</th>
              <th className="p-3 mb-2 bg-danger text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedFirstName}
                      onChange={(event) => setEditedFirstName(event.target.value)}
                    />
                  ) : (
                    contact.firstName
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedLastName}
                      onChange={(event) => setEditedLastName(event.target.value)}
                    />
                  ) : (
                    contact.lastName
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="email"
                      value={editedEmail}
                      onChange={(event) => setEditedEmail(event.target.value)}
                    />
                  ) : (
                    contact.email
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <button onClick={() => handleEditSubmit(index)}>Save</button>
                  ) : (
                    <button onClick={() => handleEditContact(index)}>Edit</button>
                  )}
                  <button onClick={() => handleDeleteContact(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;



