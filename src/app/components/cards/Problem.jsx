// Hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Components
import Option from "./Option";
import Question from "./Question";
import Button from "../ui/Button";

// Actions
import { markAsVisited, setSelectedAnswer } from "@/redux/slices/problemsSlice";

// libs
import { getCurrentProblem } from "@/app/lib/getCurrentProblem";

// Css
import "./problem.css";

const Problem = ({ id }) => {
  const problem = useSelector(
    (state) => getCurrentProblem(state, id),
    shallowEqual
  );
  const selectedOption = problem.selectedAnswer;
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (problem && !problem.isVisited) {
      dispatch(markAsVisited(problem.id));
    }
  }, []);

  const handleSelectedOption = (selectedOption) => {
    dispatch(setSelectedAnswer({ id, selectedOption }));
  };

  const renderProblemOptions = () => {
    if (problem.type === "boolean") {
      return (
        <>
          <Option
            isSelected={selectedOption === "True"}
            onClick={() => handleSelectedOption("True")}
          >
            True
          </Option>
          <Option
            isSelected={selectedOption === "False"}
            onClick={() => handleSelectedOption("False")}
          >
            False
          </Option>
        </>
      );
    }

    const options = [...problem.incorrect_answers, problem.correct_answer];

    return options.map((option) => {
      return (
        <Option
          key={option}
          isSelected={selectedOption === option}
          onClick={() => handleSelectedOption(option)}
        >
          {option}
        </Option>
      );
    });
  };

  const redirectToPrev = () => {
    router.push(String(+id - 1));
  };

  const redirectToNext = () => {
    router.push(String(+id + 1));
  };

  return (
    <div className="problemContainer">
      <Question id={id}>{problem.question}</Question>
      <div className="options">{renderProblemOptions()}</div>
      <div className="nextPrevButtons">
        <Button disabled={id == 1} onClick={redirectToPrev}>
          Prev
        </Button>
        <Button disabled={id == 15} onClick={redirectToNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Problem;
