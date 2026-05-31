function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
}

export default Input;