import { ContactItem } from "../contact-item/contact-item.component";
import { getData } from "../../data";

import "./contact-list.style.css";
import { useState } from "react";
export const ContactList = ({ onDelete, contacts }) => {
  return (
    <div className="contact-list-container">
      {contacts.map((data) => (
        <ContactItem itemData={data} key={data.id} onDelete={onDelete} />
      ))}
    </div>
  );
};
