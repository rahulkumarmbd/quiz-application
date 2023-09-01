// libs
import { getClassName } from "@/app/lib/getClassName";

// Css
import "./css/button.css";

const Button = ({
  disabled = false,
  className = "",
  variant = "",
  children,
  onClick,
}) => {
  if (!children) return null;

  return (
    <button
      disabled={disabled}
      className={getClassName(`button ${variant}`, className)}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
