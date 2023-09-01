import "./option.css";

const Option = ({ children, isSelected, onClick }) => {
  return (
    <div className={`option ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Option;
