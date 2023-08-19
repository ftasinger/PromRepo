import React, { useState } from 'react';

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newContact = { firstName, lastName, email };
    setContacts([...contacts, newContact]);

    // Reset the form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
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
        <input type="submit" class="Submit" />
      </form>

      {/* Display contacts */}
      <div>
        <h2>Contact List</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;


