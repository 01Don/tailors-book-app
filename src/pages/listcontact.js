import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEllipsisV, FaTrash, FaPaperPlane } from 'react-icons/fa';
import './contactlist.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Kwame', number: '+233 2471 72 944', recent: true, showDelete: false, picture: null },
    { id: 2, name: 'Tony Bonz', number: '+233 5518 06 883', recent: true, showDelete: false, picture: null },
    { id: 3, name: 'Simon', number: '+233 5921 61 530', recent: true, showDelete: false, picture: null },
    // Add more contacts as needed
  ]);
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');
  const [newContactPicture, setNewContactPicture] = useState(null);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleAddContact = () => {
    setContacts([
      ...contacts,
      { id: contacts.length + 1, name: newContactName, number: newContactNumber, recent: false, showDelete: false, picture: newContactPicture },
    ]);
    setNewContactName('');
    setNewContactNumber('');
    setNewContactPicture(null);
    setIsModalOpen(false);
  };

  const toggleDeleteButton = (id) => {
    const updatedContacts = contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, showDelete: !contact.showDelete };
      }
      return { ...contact, showDelete: false };
    });
    setContacts(updatedContacts);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewContactPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.number.includes(searchText)
  );

  const recents = filteredContacts.filter((contact) => contact.recent);
  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  return (
    <div className="contact-list-container">
      <header className="header">
        <h1>My Contacts</h1>
        <div className="profile-avatar"></div>
      </header>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name or number"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <section className="recents">
        <h2>Recents</h2>
        <ul>
          {recents.map((contact, index) => (
            <li key={index} className="contact-item">
              <div className="contact-info">
                <div className="contact-avatar"></div>
                <div>
                  <p className="contact-name">{contact.name}</p>
                  <p className="contact-number">{contact.number}</p>
                </div>
              </div>
              <div className="contact-options">
                <FaEllipsisV className="ellipsis-icon" onClick={() => toggleDeleteButton(contact.id)} />
                {contact.showDelete && (
                  <FaTrash className="delete-icon" onClick={() => handleDeleteContact(contact.id)} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="contacts">
        <h2>Contacts</h2>
        {Object.keys(groupedContacts).map((letter) => (
          <div key={letter}>
            <h3>{letter}</h3>
            <ul>
              {groupedContacts[letter].map((contact, index) => (
                <li key={index} className="contact-item">
                  <div className="contact-info">
                    <div className="contact-avatar"></div>
                    <div>
                      <p className="contact-name">{contact.name}</p>
                      <p className="contact-number">{contact.number}</p>
                    </div>
                  </div>
                  <div className="contact-options">
                    <FaEllipsisV className="ellipsis-icon" onClick={() => toggleDeleteButton(contact.id)} />
                    {contact.showDelete && (
                      <FaTrash className="delete-icon" onClick={() => handleDeleteContact(contact.id)} />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <button className="fab" onClick={() => setIsModalOpen(true)}>
        <FaPlus />
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Contact</h2>
            <input
              type="text"
              placeholder="Name"
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Number"
              value={newContactNumber}
              onChange={(e) => setNewContactNumber(e.target.value)}
            />
            <label htmlFor="picture">Picture:</label>
            <input
              type="file"
              id="picture"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
            />
            {newContactPicture && (
              <img src={newContactPicture} alt="Contact" className="preview-picture" />
            )}
            <button className="send-btn" onClick={handleAddContact}>
              <FaPaperPlane /> Add Contact
            </button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
