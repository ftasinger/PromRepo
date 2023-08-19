import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const dataTable = document.getElementById('data-table');

  // Function to handle form submission
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = contactForm.elements['firstName'].value;
    const lastName = contactForm.elements['lastName'].value;
    const email = contactForm.elements['email'].value;

    // Create a new row in the data table with the submitted data
    const newRow = dataTable.insertRow(-1);
    const firstNameCell = newRow.insertCell(0);
    const lastNameCell = newRow.insertCell(1);
    const emailCell = newRow.insertCell(2);
    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    emailCell.textContent = email;

    // Reset the form fields after submission
    contactForm.reset();
  });
});
