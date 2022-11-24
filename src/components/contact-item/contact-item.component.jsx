import { ContactItemBody } from "../contact-item-body/contact-item-body.component";
import { ContactItemImage } from "../contact-item-image/contact-item-image.component";

import "./contact-item.style.css";
export const ContactItem = ({ itemData }) => {
  const { imageUrl, tag, name } = itemData;
  return (
    <div className="contact-item-container">
      <ContactItemImage imgUrl={imageUrl} />
      <ContactItemBody tag={tag} name={name} />
    </div>
  );
};
