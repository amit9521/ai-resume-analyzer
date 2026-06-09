function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled=false
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-lg
        font-medium
        hover:bg-blue-700
        transition
        cursor-pointer
        ${className}
      `}
       disabled={disabled}
      
    >
      {children}
    </button>
  );
}

export default Button;