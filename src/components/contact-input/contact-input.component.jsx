import { useState } from "react";
import "./contact-input.style.css";
export const ContactInput = ({ onAddedContact }) => {
  const [addContact, setAddContact] = useState({ user: "", tag: "" });
  const nameChangeHandler = (event) => {
    setAddContact(() => {
      return {
        ...addContact,
        user: event.target.value,
      };
    });
  };
  const tagChangeHandler = (event) => {
    setAddContact(() => {
      return {
        ...addContact,
        tag: event.target.value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddedContact(addContact);
  };
  return (
    <div>
      <form
        className="contact-input"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={addContact.user}
          onChange={(event) => {
            nameChangeHandler(event);
          }}
        />
        <input
          type="text"
          placeholder="Tag"
          value={addContact.tag}
          onChange={(event) => {
            tagChangeHandler(event);
          }}
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
