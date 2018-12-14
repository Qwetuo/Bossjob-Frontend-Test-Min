const initialState = {
  query: "",
  jobs: [],
  count: "0"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, loading: true };
    case "JOBS_RECEIVED":
      return {
        ...state,
        jobs: action.jobs,
        count: action.count,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
