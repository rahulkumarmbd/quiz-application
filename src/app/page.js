"use client";

// Hooks
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Components
import Auth from "./components/cards/Auth";
import Title from "./components/common/Title";

// Css
import "./css/page.css";

function Home() {
  const router = useRouter();
  const email = useSelector((state) => state.currentUser.email, shallowEqual);

  useEffect(() => {
    if (email) {
      router.push("/quiz/1");
    }
  }, [email]);

  if (email) {
    return <Title className="awaitRender">Please wait a sec...</Title>;
  }

  return (
    <div className="authWrapper">
      <Auth />
    </div>
  );
}

export default Home;
