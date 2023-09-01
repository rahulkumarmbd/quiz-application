"use client";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Components
import Button from "../components/ui/Button";
import Title from "../components/common/Title";
import Table from "./Table";

// Actions
import { resetQuiz } from "@/redux/slices/problemsSlice";
import { resetReportStatus } from "@/redux/slices/reportSlice";
import { removeCurrentUser } from "@/redux/slices/currentUserSlice";

// Css
import "./reports.css";

const Reports = () => {
  const problems = useSelector((state) => state.problems.data);
  const currentUser = useSelector((state) => state.currentUser);
  const reportStatus = useSelector((state) => state.reportStatus);
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePlayAgain = () => {
    dispatch(resetQuiz());
    dispatch(resetReportStatus());
    router.push("/quiz/1");
  };

  const handleRedirectToHome = () => {
    dispatch(resetQuiz());
    dispatch(resetReportStatus());
    dispatch(removeCurrentUser());
    router.push("/");
  };

  const { firstName, lastName, email } = currentUser;

  useEffect(() => {
    if (!email && !reportStatus.showReport) {
      handleRedirectToHome();
    }
  }, [email, reportStatus.showReport]);

  useEffect(() => {
    if (email && !reportStatus.showReport) {
      handlePlayAgain();
    }
  }, [email, reportStatus.showReport]);

  if (!email && !reportStatus.showReport) {
    return (
      <Title className="notAuthenticated">You are not authenticated...</Title>
    );
  }

  if (email && !reportStatus.showReport) {
    return <Title className="invalidRequest">Invalid Request</Title>;
  }

  const totalScore = problems.reduce((acc, problem) => {
    if (problem.selectedAnswer === problem.correct_answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const totalProblems = problems.length;

  return (
    <div className="reportStatus">
      <Title className="quizTitle">
        Hi! {firstName} {lastName} ({email}), Your total score is {totalScore}{" "}
        out of {totalProblems}
      </Title>
      <div className="tableContainer">
        <Table problems={problems} />
      </div>
      <div className="tableButtons">
        <Button onClick={handlePlayAgain}>Play Again</Button>
        <Button onClick={handleRedirectToHome}>Home</Button>
      </div>
    </div>
  );
};

export default Reports;
