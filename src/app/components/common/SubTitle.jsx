// Css
import "./css/subTitle.css";

const SubTitle = ({ className, children }) => {
  if (!children) return null;
  return <div className={`subTitle ${className}`}>{children}</div>;
};

export default SubTitle;
