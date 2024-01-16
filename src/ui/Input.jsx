function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className="input"
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default Input;
