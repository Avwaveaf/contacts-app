export const ContactDelete = ({ onDelete, id }) => {
  return <button onClick={() => onDelete(id)}>Delete</button>;
};
