function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px", margin: "5px" }}>
      {text}
    </button>
  );
}

export default Button;