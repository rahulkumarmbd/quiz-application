import "./Button.css";

const Button = ({ disabled = false, className = "", children }) => {
  if (!children) return null;

  return (
    <button disabled={disabled} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
