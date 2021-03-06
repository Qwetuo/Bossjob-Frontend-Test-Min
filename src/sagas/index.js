import { put, takeLatest, all, select } from "redux-saga/effects";

function* fetchJobs() {

  const getQuery = state => state.query
  const query = yield select(getQuery)

  const json = yield fetch(
    `https://search.bossjob.com/api/v1/search/job_filter?size=12&query=${query}`
  ).then(response => response.json());
  yield put({ type: "JOBS_RECEIVED", jobs: json.data.jobs, count: json.data.total_num });

}

function* actionWatcher() {
  yield takeLatest("GET_JOBS", fetchJobs);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
