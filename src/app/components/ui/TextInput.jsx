import { useId } from "react";
import "./TextInput.css";

const TextInput = ({ label = "", placeholder = "", className = "" }) => {
  const id = useId();

  const renderLabelTag = () => {
    if (label) {
      return (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      );
    }
    return null;
  };

  return (
    <div className="textInputContainer">
      {renderLabelTag()}
      <input
        id={id}
        placeholder={placeholder}
        className={`textInput ${className}`}
        type="text"
        autoComplete="off"
      />
    </div>
  );
};

export default TextInput;
