function InputField({ label, type, value, onChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}

export default InputField;