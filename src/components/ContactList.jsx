import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactCard = props.contacts.map((contact) => {
    console.log(contact);
    return <ContactCard contact={contact} id={contact.id} />;
  });
  return <div className="ui celled list">{renderContactCard}</div>;
};

export default ContactList;
