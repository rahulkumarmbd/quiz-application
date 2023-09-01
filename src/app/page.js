"use client";

import { useSelector } from "react-redux";
import Auth from "./components/cards/Auth";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const { email } = useSelector((state) => state.currentUser);

  if (email){
    router.push("/quiz");
    return null;
  }

  return <Auth />;
}

export default Home;
