// Hooks
import { useSelector } from "react-redux";

// Components
import Title from "../common/Title";
import NavigationButtonsGrid from "./NavigationButtonsGrid";

// Css
import "./problemNavigation.css";

const ProblemNavigation = ({ id }) => {
  const problems = useSelector((state) => state.problems.data);

  const totalProblems = problems.length;
  return (
    <div className="problemNavigationContainer">
      <Title className="questionNumber">
        Question: {id} / {totalProblems}
      </Title>
      <NavigationButtonsGrid id={id} />
    </div>
  );
};

export default ProblemNavigation;
