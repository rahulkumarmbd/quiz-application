export const getCurrentProblem = (state, id) => {
  return state.problems?.data.find((problem) => problem.id === id);
};
