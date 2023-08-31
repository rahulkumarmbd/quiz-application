import { getClassName } from "@/app/lib/getClassName";
import "./Button.css";

const Button = ({ disabled = false, className = "", children, onClick }) => {
  if (!children) return null;

  return (
    <button
      disabled={disabled}
      className={getClassName("button", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
