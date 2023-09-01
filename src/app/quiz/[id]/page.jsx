"use client";

// Hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// Components
import Title from "../../components/common/Title";
import Problem from "@/app/components/cards/Problem";

// Actions
import { fetchProblems } from "@/redux/slices/problemsSlice";
import Loading from "./loading";
import Error from "./error";

import "./page.css";

const numberOfProblems = 15;

const Quiz = ({ params }) => {
  const currentUser = useSelector((state) => state.currentUser, shallowEqual);
  const problems = useSelector((state) => state.problems, shallowEqual);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchProblems(numberOfProblems));
  }, []);

  useEffect(() => {
    if (!currentUser.email) {
      router.replace("/");
    }
  }, [currentUser.email]);

  if (!currentUser.email) {
    return <Title>You are not authenticated...</Title>;
  }

  if (
    !params.id ||
    params.id != +params.id ||
    params.id <= 0 ||
    params.id > numberOfProblems
  ) {
    return <Title>Invalid Question ID: {params.id}</Title>;
  }

  if (problems.status === "loading" || problems.status === "idle") {
    return <Loading />;
  }

  if (problems.error) {
    return <Error />;
  }

  return (
    <div className="quizContainer">
      <Title className="quizTitle">Quiz the Best, Win the Rest!</Title>
      <div>{params.id && <Problem id={+params.id} />}</div>
    </div>
  );
};

export default Quiz;
