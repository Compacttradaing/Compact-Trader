function Input({ type, placeholder, value, onChange, disabled, id }) {
  return (
    <input
      id={id}
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
