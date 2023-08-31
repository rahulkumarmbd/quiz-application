import { useId } from "react";
import "./TextInput.css";
import { getClassName } from "@/app/lib/getClassName";

const TextInput = (props) => {
  const {
    label = "",
    placeholder = "",
    className = "",
    labelClassName = "",
    errorMessage = "",
    name,
    value,
    onChange,
  } = props;
  const id = useId();

  const renderLabelTag = () => {
    if (label) {
      return (
        <label className={getClassName("label",labelClassName,errorMessage)} htmlFor={id}>
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
        className={getClassName("textInput",className,errorMessage)}
        type="text"
        autoComplete="off"
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="errorMessage">{errorMessage}</div>
    </div>
  );
};

export default TextInput;
