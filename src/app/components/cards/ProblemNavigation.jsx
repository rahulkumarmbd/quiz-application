import { useSelector } from "react-redux";
import "./problemNavigation.css";
import Button from "../ui/Button";
import Title from "../common/Title";
import { useRouter } from "next/navigation";

const ProblemNavigation = ({ id }) => {
  const problems = useSelector((state) => state.problems.data);
  const router = useRouter();

  const getCircularButtonClassName = (problem) => {
    let className = "";
    if (problem.isVisited) {
      className += " visited";
    }

    if (id === problem.id) {
      className += " currentButton";
    }

    return className;
  };

  const handleCircularButtonClick = (id) => {
    router.push(String(id));
  };

  const totalProblems = problems.length;
  return (
    <div className="problemNavigationContainer">
      <Title>
        Question {id}/{totalProblems}
      </Title>
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
    </div>
  );
};

export default ProblemNavigation;
