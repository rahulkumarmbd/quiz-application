import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showReport: false,
  timeOver: false,
};

const reportStatusSlice = createSlice({
  name: "reportStatus",
  initialState,
  reducers: {
    updateReportStatus: (state, action) => {
      state.showReport = action.payload.showReport;
      state.timeOver = action.payload.timeOver;
    },
    resetReportStatus: () => {
      return initialState;
    },
  },
});

export const { updateReportStatus, resetReportStatus } =
  reportStatusSlice.actions;
export default reportStatusSlice.reducer;
