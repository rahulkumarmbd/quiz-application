import "./Title.css";

const Title = ({ className = "", children }) => {
  if (!children) return null;
  return <div className={`title ${className}`}>{children}</div>;
};

export default Title;
