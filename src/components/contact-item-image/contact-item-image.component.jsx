import "./contact-item-image.style.css";
export const ContactItemImage = ({ imgUrl }) => {
  return (
    <div className="img-container">
      <img src={imgUrl} alt="user" />
    </div>
  );
};
