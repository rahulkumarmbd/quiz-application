"use client";

// Hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Components
import Title from "../../components/common/Title";
import Problem from "@/app/components/cards/Problem";
import ProblemNavigation from "@/app/components/cards/ProblemNavigation";
import Button from "@/app/components/ui/Button";
import Loading from "./QuizLoading";
import Error from "./QuizError";

// Slices
import { fetchProblems } from "@/redux/slices/problemsSlice";
import { updateReportStatus } from "@/redux/slices/reportSlice";

// Css
import "./css/page.css";

// Constants
const numberOfProblems = 15;

const Quiz = ({ params }) => {
  const currentUser = useSelector((state) => state.currentUser, shallowEqual);
  const problems = useSelector((state) => state.problems, shallowEqual);
  const reportStatus = useSelector((state) => state.reportStatus, shallowEqual);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!problems.data.length) {
      dispatch(fetchProblems(numberOfProblems));
    }
  }, []);

  useEffect(() => {
    if (!currentUser.email) {
      router.push("/");
    }
  }, [currentUser.email]);

  useEffect(() => {
    if (reportStatus.showReport) {
      router.push("/reports");
    }
  }, [reportStatus.showReport]);

  if (!currentUser.email || reportStatus.showReport) {
    return (
      <Title className="notAuthenticated">Please wait a sec...</Title>
    );
  }

  if (
    !params.id ||
    params.id != +params.id ||
    params.id <= 0 ||
    params.id > numberOfProblems
  ) {
    return (
      <Title className="invalidId">Invalid Question ID: {params.id}</Title>
    );
  }

  if (problems.status === "loading" || problems.status === "idle") {
    return <Loading />;
  }

  if (problems.error) {
    return <Error />;
  }

  const handleSubmit = () => {
    localStorage.clear("timerMinutes");
    localStorage.clear("timerSeconds");
    dispatch(updateReportStatus({ showReport: true, timeOver: false }));
    router.push("/reports");
  };

  return (
    <div className="quizContainer">
      <Title className="quizTitle">
        Hi! {currentUser.firstName} {currentUser.lastName}, Quiz the Best, Win
        the Rest!
      </Title>
      <div className="quizProblemWithNavigation">
        <Problem id={+params.id} />
        <ProblemNavigation id={+params.id} />
      </div>
      <div className="submitAllButtonContainer">
        <Button className="submitAllButton" onClick={handleSubmit}>
          Submit All
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
