import "./contact-item-body.style.css";
export const ContactItemBody = ({ tag, name }) => {
  return (
    <div className="contact-item-body-container">
      <h2>{name}</h2>
      <p>@{tag}</p>
    </div>
  );
};
