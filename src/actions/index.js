export const getJobs = () => ({
  type: "GET_JOBS"
});

export const changeQuery = query => ({
  type: "CHANGE_QUERY",
  query
});
