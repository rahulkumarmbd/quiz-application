// Css
import "./css/question.css";

const Question = ({ id, children }) => {
  return (
    <div className="question">
      <h4>Question: {id}</h4>
      <p dangerouslySetInnerHTML={{ __html: children }}></p>
    </div>
  );
};

export default Question;
