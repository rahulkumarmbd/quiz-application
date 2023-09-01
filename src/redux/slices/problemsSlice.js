import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProblems = createAsyncThunk("problems/fetch", async (amount) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}`
  );

  return response.data?.results.map((question, index) => ({
    ...question,
    id: index + 1,
  }));
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProblems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProblems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchProblems };

export default problemsSlice.reducer;
