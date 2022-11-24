import { ContactList } from "../contact-list/contact-list.component";
import "./contacts.app.style.css";
export const ContactsApp = () => {
  return (
    <div className="contacts-app-container">
      <h1>Daftar Kontak</h1>
      <ContactList />
    </div>
  );
};
