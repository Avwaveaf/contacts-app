import { ContactItem } from "../contact-item/contact-item.component";
import { getData } from "../../data";

import "./contact-list.style.css";
export const ContactList = () => {
  const itemData = getData();
  return (
    <div className="contact-list-container">
      {itemData.map((data) => (
        <ContactItem itemData={data} key={data.id} />
      ))}
    </div>
  );
};
