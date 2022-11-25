import { ContactList } from "../contact-list/contact-list.component";
import "./contacts.app.style.css";
import { ContactInput } from "../contact-input/contact-input.component";
import { useState } from "react";
import { getData } from "../../data";

export const ContactsApp = () => {
  const itemDatas = getData();
  const [itemData, setItemData] = useState(itemDatas);
  const onDelete = (id) => {
    const filteredDatas = itemData.filter((item) => item.id !== id);
    setItemData(filteredDatas);
  };
  const onAddedContact = (addContact) => {
    setItemData((prevState) => {
      return [
        ...prevState,
        {
          id: +new Date(),
          name: addContact.user,
          tag: addContact.tag,
          imageUrl: "assets/default.jpg",
        },
      ];
    });
  };
  return (
    <div className="contacts-app-container">
      <h1>Contact App</h1>
      <h2>Tambah Kontak</h2>
      <ContactInput onAddedContact={onAddedContact} />
      <h2>Daftar Kontak</h2>
      <ContactList contacts={itemData} onDelete={onDelete} />
    </div>
  );
};
