"use client";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./Header.css";
import Timer from "./Timer";
import { useRouter } from "next/navigation";
import { updateReportStatus } from "@/redux/slices/reportSlice";

const Header = ({ children }) => {
  const email = useSelector((state) => state.currentUser.email, shallowEqual);
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
      {email && !showReport && (
        <Timer initialMinutes={2} onOver={handleAutoSubmit} />
      )}
      <div className="header">{children}</div>
    </div>
  );
};

export default Header;
