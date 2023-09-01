import { shallowEqual, useSelector } from "react-redux";
import Option from "./Option";
import Question from "./Question";
import { getCurrentProblem } from "@/app/lib/getCurrentProblem";
import { useState } from "react";

import './problem.css';

const Problem = ({ id }) => {
  const problem = useSelector(
    (state) => getCurrentProblem(state, id),
    shallowEqual
  );
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectedOption = (selectedOption) => {
    setSelectedOption(selectedOption);
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
          isSelected={selectedOption === option}
          onClick={() => handleSelectedOption(option)}
        >
          {option}
        </Option>
      );
    });
  };

  return (
    <div>
      <Question id={id}>{problem.question}</Question>
      <div className="options">{renderProblemOptions()}</div>
    </div>
  );
};

export default Problem;
