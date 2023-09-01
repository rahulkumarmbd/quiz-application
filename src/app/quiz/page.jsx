"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Title from "../components/common/Title";

const Quiz = () => {
  const router = useRouter();
  const { email } = useSelector((state) => state.currentUser);

  if(!email){
    router.replace("/");
    return null;
  }

  return <Title>Quiz the Best, Win the Rest!</Title>;
};

export default Quiz;
