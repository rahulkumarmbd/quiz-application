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
  },
});

export const { updateReportStatus } = reportStatusSlice.actions;
export default reportStatusSlice.reducer;
