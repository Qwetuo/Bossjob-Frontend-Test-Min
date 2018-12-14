const initialState = {
  query: "",
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, loading: true };
    case "JOBS_RECEIVED":
      return { ...state, jobs: action.json, loading: false };
    default:
      return state;
  }
};
export default reducer;
