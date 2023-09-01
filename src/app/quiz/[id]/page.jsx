"use client";

// Hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Components
import Title from "../../components/common/Title";
import Problem from "@/app/components/cards/Problem";
import ProblemNavigation from "@/app/components/cards/ProblemNavigation";

// Actions
import { fetchProblems } from "@/redux/slices/problemsSlice";
import Loading from "./Loading";
import Error from "./error";

import "./page.css";
import Button from "@/app/components/ui/Button";
import { updateReportStatus } from "@/redux/slices/reportSlice";

const numberOfProblems = 15;

const Quiz = ({ params }) => {
  const currentUser = useSelector((state) => state.currentUser, shallowEqual);
  const problems = useSelector((state) => state.problems, shallowEqual);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!problems.data.length) {
      dispatch(fetchProblems(numberOfProblems));
    }
  }, []);

  useEffect(() => {
    if (!currentUser.email) {
      router.replace("/");
    }
  }, [currentUser.email]);

  if (!currentUser.email) {
    return (
      <Title className="notAuthenticated">You are not authenticated...</Title>
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
    router.push("/reports");
    dispatch(updateReportStatus({ showReport: true, timeOver: false }));
  };

  return (
    <div className="quizContainer">
      <Title className="quizTitle">Quiz the Best, Win the Rest!</Title>
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
