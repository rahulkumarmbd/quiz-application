"use client";

// Hooks
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Components
import Timer from "./Timer";

// Slices
import { updateReportStatus } from "@/redux/slices/reportSlice";

// Css
import "./css/header.css";

const Header = ({ children }) => {
  const email = useSelector((state) => state.currentUser.email, shallowEqual);
  const problems = useSelector((state) => state.problems.data);
  const showReport = useSelector(
    (state) => state.reportStatus.showReport,
    shallowEqual
  );
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAutoSubmit = () => {
    dispatch(updateReportStatus({ showReport: true, timeOver: true }));
    router.push("/reports");
  };

  return (
    <div>
      {email && !!problems.length && !showReport && (
        <Timer initialMinutes={30} onOver={handleAutoSubmit} />
      )}
      <div className="header">{children}</div>
    </div>
  );
};

export default Header;
