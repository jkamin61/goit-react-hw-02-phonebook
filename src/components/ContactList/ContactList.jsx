import React from 'react';

function ContactList({ contacts, onDeleteContact }) {
  const handleDeleteContact = id => {
    onDeleteContact(id);
  };

  return (
    <ul className={'contact__list'}>
      {contacts.map(contact => (
        <li key={contact.id} className={'contact__item'}>
          <span>{contact.name} {contact.number}</span>
          <button className={"contact__button"} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
