// Css
import "./css/option.css";

const Option = ({ children, isSelected, onClick }) => {
  return (
    <div
      className={`option ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  );
};

export default Option;
