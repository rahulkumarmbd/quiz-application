// Hooks
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Components
import Button from "../ui/Button";

// Css
import "./navigationButtonsGrid.css";

const NavigationButtonsGrid = ({id}) => {
  const problems = useSelector((state) => state.problems.data);
  const router = useRouter();

  const handleCircularButtonClick = (id) => {
    router.push(String(id));
  };

  const getCircularButtonClassName = (problem) => {
    let className = "";
    if (problem.isVisited) {
      className += " visited";
    }

    if (id === problem.id) {
      className += " currentButton";
    }

    if (problem.selectedAnswer) {
      className += " selectedAnswer";
    }

    return className;
  };

  return (
    <div className="circularButtons">
      {problems.map((problem) => {
        return (
          <Button
            key={problem.id}
            onClick={() => handleCircularButtonClick(problem.id)}
            className={getCircularButtonClassName(problem)}
            variant="circular"
          >
            {problem.id}
          </Button>
        );
      })}
    </div>
  );
};

export default NavigationButtonsGrid;
