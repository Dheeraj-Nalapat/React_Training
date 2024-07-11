const Button = ({ text, type, id, handleSubmit }) => {
  return (
    <button type={type} id={id} onClick={handleSubmit}>
      {text}
    </button>
  );
};

export default Button;
